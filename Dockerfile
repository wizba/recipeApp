# Use the latest LTS (Long Term Support) version of Node as a base image
FROM node:18

# Sets the environment variable to ensure that the commands run non-interactively
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies required for React Native and Android development
RUN apt-get update && apt-get install -y \
    openjdk-11-jdk \
    adb \
    unzip \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set up environment variables for Java and Android SDK
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
ENV PATH $PATH:$JAVA_HOME/bin

# Download and install Android SDK
ENV ANDROID_SDK_ROOT /usr/local/android-sdk
RUN mkdir -p $ANDROID_SDK_ROOT/cmdline-tools && \
    curl -o cmdline-tools.zip https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip && \
    unzip cmdline-tools.zip -d $ANDROID_SDK_ROOT/cmdline-tools && \
    rm cmdline-tools.zip

# Add Android SDK to path
ENV PATH $PATH:$ANDROID_SDK_ROOT/platform-tools:$ANDROID_SDK_ROOT/cmdline-tools/tools/bin

# Accept licenses before installing components
RUN yes | sdkmanager --licenses

# Install Android SDK components
RUN sdkmanager "platform-tools" "platforms;android-30" "build-tools;30.0.3"

# Create a directory for the app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the filesystem
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project code
COPY . .

# Expose the port the app runs on
EXPOSE 8081

# Command to run when starting the container
CMD ["npx", "react-native", "start"]
