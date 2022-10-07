# === CONFIGURING ===
FROM node:16-alpine as builder
# === WORKING DIR ===
# Set the working directory to /app inside the container
WORKDIR /app
COPY . /app
# === BUILDING ===
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm set-script prepare ""
RUN npm ci --legacy-peer-deps
RUN npm run build:production
# === DISPATCHING STATIC ===
# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
USER root
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
