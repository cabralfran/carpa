FROM node:14-alpine 

WORKDIR /app
ADD . /app

# Install OpenSSH and set the password for root to "Docker!". In this example, "apk add" is the install instruction for an Alpine Linux-based image.
RUN apk add openssh \
  && echo "root:Docker!" | chpasswd 

# Copy the sshd_config file to the /etc/ssh/ directory
COPY sshd_config /etc/ssh/

# Copy and configure the ssh_setup file
RUN mkdir -p /tmp
COPY ssh_setup.sh /tmp
RUN chmod +x /tmp/ssh_setup.sh \
  && (sleep 1;/tmp/ssh_setup.sh 2>&1 > /dev/null)

# Open port 2222 for SSH access
EXPOSE 2222

COPY init_container.sh /opt/startup
RUN chmod 755 /opt/startup/init_container.sh

RUN yarn install
RUN yarn build

ENTRYPOINT ["/opt/startup/init_container.sh","yarn start:prod"]