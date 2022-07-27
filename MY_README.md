# 在原项目基础上搭建基于 Mediapipe 的 face landmark 系统

## 原构建

```sh
# 构建镜像 & 启动容器 & 构建 wasm 和 js 到 public 目录 & 销毁容器
yarn build:tflite
```

## face landmark 构建

```sh
# 构建镜像
docker build -t tflite-face-landmark tflite-face-landmark

# 运行容器
docker run -it -v $PWD:/workspace -w /workspace tflite-face-landmark

# VSC Docker Attach，通过 VSC 进入容器进行开发

# 进入工作区
cd /workspace

# 拉取 TensorFlow 与 Mediapipe 最新代码
git -C /tensorflow_src pull --rebase
git -C /mediapipe_src pull --rebase

# 修改 tensorflow/BUILD 配置
sed -i 's/"crosstool_top": "\/\/external:android\/emscripten"/"crosstool_top": "@emsdk\/\/emscripten_toolchain:everything"/' /tensorflow_src/tensorflow/BUILD

# 进入编译 wasm 工作区
cd workspace/tflite-face-landmark

# 清除编译缓存
bazel clean --expunge

# 编译 tflite
bazel build --config=wasm --verbose_failures -c opt :tflite-face-landmark
# 编译产物从 docker container 移动到主项目
tar xvf bazel-bin/tflite-face-landmark -C ../public/tflite-face-landmark

# 编译 tflite simd
bazel build --config=wasm --features=wasm_simd -c opt :tflite-simd-face-landmark
# 编译产物从 docker container 移动到主项目
tar xvf bazel-bin/tflite-simd-face-landmark -C ../public/tflite-face-landmark
```

## C++ 构建

```sh
# VSC docker attach

cd mediapipe_src/
export GLOG_logtostderr=1
# Need bazel flag 'MEDIAPIPE_DISABLE_GPU=1' as desktop GPU is not supported currently.
bazel run --define MEDIAPIPE_DISABLE_GPU=1 \
    mediapipe/examples/desktop/hello_world:hello_world
```

## FAQ

- [docker-error-failed-to-register-layer-symlink](https://stackoverflow.com/questions/44942790/docker-error-failed-to-register-layer-symlink)
