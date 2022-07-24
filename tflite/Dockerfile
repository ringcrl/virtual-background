FROM tensorflow/tensorflow:devel
RUN git clone https://github.com/google/mediapipe.git /mediapipe_src
COPY entrypoint.sh /entrypoint.sh

# 不自动运行，进入 docker container 手动执行
# ENTRYPOINT ["/entrypoint.sh"]
