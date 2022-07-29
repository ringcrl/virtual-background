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

# tensorflow_src
git -C /tensorflow_src pull --rebase
# 迁出到指定 commit 
git -C /tensorflow_src checkout a3419ac
# 应用修改补丁
git -C /tensorflow_src apply /mediapipe_src/third_party/org_tensorflow_compatibility_fixes.diff
git -C /tensorflow_src apply /mediapipe_src/third_party/org_tensorflow_custom_ops.diff

# mediapipe_src
git -C /mediapipe_src pull --rebase
# 应用修改补丁
TODO:

# 修改 tensorflow/BUILD 配置
sed -i 's/"crosstool_top": "\/\/external:android\/emscripten"/"crosstool_top": "@emsdk\/\/emscripten_toolchain:everything"/' /tensorflow_src/tensorflow/BUILD

# 进入编译 wasm 工作区
cd /workspace/tflite-face-landmark

# 清除编译缓存
bazel clean --expunge

# 编译 tflite
bazel build --define MEDIAPIPE_DISABLE_OPENCV=1 --config=wasm --verbose_failures -c opt :tflite-face-landmark
# 编译产物从 docker container 移动到主项目
tar xvf bazel-bin/tflite-face-landmark -C ../public/tflite-face-landmark

# 编译 tflite simd
TODO: 
```

## 保存与还原 git 修改记录

```sh
cd /mediapipe_src

# 保存修改记录
git diff > /workspace/diff/mediapipe_src.patch

# 还原修改记录
git apply /workspace/diff/mediapipe_src.patch
```

## C++ 构建

```sh
# VSC docker attach

# opencv 依赖安装
apt-get install libopencv-core-dev libopencv-highgui-dev libopencv-calib3d-dev libopencv-features2d-dev libopencv-imgproc-dev libopencv-video-dev libopencv-contrib-dev

cd /mediapipe_src
export GLOG_logtostderr=1

# hello_world
# Need bazel flag 'MEDIAPIPE_DISABLE_GPU=1' as desktop GPU is not supported currently.
bazel build --define MEDIAPIPE_DISABLE_GPU=1 mediapipe/examples/desktop/hello_world:hello_world

# face_mesh
bazel build --define MEDIAPIPE_DISABLE_GPU=1 mediapipe/examples/desktop/face_mesh:face_mesh_cpu
# 运行构建产物
GLOG_logtostderr=1 bazel-bin/mediapipe/examples/desktop/face_mesh/face_mesh_cpu \
    --calculator_graph_config_file=mediapipe/graphs/face_mesh/face_mesh_desktop_live.pbtxt \
    --input_video_path="/workspace/public/videos/Dance - 32938.mp4" \
    --output_video_path=/output.mp4
```

## FAQ

- [docker-error-failed-to-register-layer-symlink](https://stackoverflow.com/questions/44942790/docker-error-failed-to-register-layer-symlink)
- [./mediapipe/framework/port/opencv_core_inc.h:18:10: fatal error: opencv2/core/version.hpp: No such file or directory](https://github.com/google/mediapipe/issues/496)
