FROM alpine:3.6 as builder
RUN apk add --no-cache curl \
    && curl -SL https://github.com/alexellis/faas/releases/download/0.6.4/fwatchdog > /usr/bin/fwatchdog \
    && chmod +x /usr/bin/fwatchdog \
    && apk --no-cache del curl

WORKDIR /root/

RUN apk add --no-cache gcc \
                       musl-dev \
                       rust \
                       cargo
COPY Cargo.toml .

RUN mkdir src
WORKDIR /root/src/

COPY src/       .

RUN cargo build --release \
 && chmod +x /root/target/release/base-rust
# && /main

ENV fprocess="/root/target/release/base-rust"
CMD ["fwatchdog"]

#FROM scratch

#COPY --from=builder /root/target/release/base-rust /
#COPY --from=builder /usr/bin/fwatchdog             /
#COPY --from=builder /tmp                           /tmp

#ENV fprocess="/base-rust"

#CMD ["/fwatchdog"]

