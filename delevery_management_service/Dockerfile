# Use a slim Node.js base image with Alpine Linux for efficiency
FROM node:18-alpine AS base

# Install dependencies only in the base image (not builder or runner)
RUN apk add --no-cache libc6-compat

# Create a working directory for the application
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to determine dependencies
COPY package*.json ./

# Install dependencies based on the package manager used (automatic detection)
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
elif [ -f package-lock.json ]; then npm ci; \
else echo "Lockfile not found." && exit 1; \
fi

# Create separate stages for building and running the application
# (multi-stage build for smaller image size)
FROM base AS builder

# Copy the application code and package.json (dependencies already installed in base)
COPY . .

# Build the Next.js application for production
RUN npm run build --prod

# Create a slimmer production image with only necessary components
FROM node:16-alpine AS runner

# Set the working directory
WORKDIR /app

# Copy the built Next.js application from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Set environment variable for production mode (optional)
ENV NODE_ENV production

# Expose the port on which the Next.js application runs (usually 3000)
EXPOSE 3000

# Run the Next.js application in production mode
CMD ["npm", "start"]
