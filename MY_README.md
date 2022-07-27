# 在原项目基础上搭建基于 Mediapipe 的 face landmark 系统

## 原 Docker 构建

```sh
# 构建镜像
docker build -t tflite tflite

# 运行容器
docker run -it -v $PWD:/workspace -w /workspace tflite

# VSC docker attach

# 参照 /workspace/tflite/entrypoint.sh 在容器内执行，编译出 wasm
```

## face landmark wasm 构建

```sh
# 构建镜像
docker build -t tflite-face-landmark tflite-face-landmark

# 运行容器
docker run -it -v $PWD:/workspace -w /workspace tflite-face-landmark

# VSC docker attach

# 参照 /workspace/tflite-face-landmark/entrypoint.sh 在容器内执行，编译出 wasm
cd workspace/tflite-face-landmark
bazel build --config=wasm -c opt :tflite-face-landmark
```

## C++ 构建

```sh
# VSC docker attach

cd mediapipe_src/
export GLOG_logtostderr=1
# Need bazel flag 'MEDIAPIPE_DISABLE_GPU=1' as desktop GPU is not supported currently.
bazel run --define MEDIAPIPE_DISABLE_GPU=1 \
    mediapipe/examples/desktop/hello_world:hello_world

bazel run --define MEDIAPIPE_DISABLE_GPU=1 \
    mediapipe/examples/desktop/face_detection:face_detection_cpu
```

## FAQ

1、[docker-error-failed-to-register-layer-symlink](https://stackoverflow.com/questions/44942790/docker-error-failed-to-register-layer-symlink)
