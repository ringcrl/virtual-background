#!/bin/sh
set -e

echo "拉取 TensorFlow 与 Mediapipe 最新代码"
git -C /tensorflow_src pull --rebase
git -C /mediapipe_src pull --rebase

echo "修改 tensorflow/BUILD 配置"
sed -i 's/"crosstool_top": "\/\/external:android\/emscripten"/"crosstool_top": "@emsdk\/\/emscripten_toolchain:everything"/' /tensorflow_src/tensorflow/BUILD

cd tflite-face-landmark

echo "bazel build tflite"
bazel build --config=wasm -c opt :tflite-face-landmark
echo "bazel build tflite simd"
bazel build --config=wasm --features=wasm_simd -c opt :tflite-simd-face-landmark

echo "构建产物移动到主项目"
mkdir -p ../public/tflite-face-landmark
tar xvf bazel-bin/tflite-face-landmark -C ../public/tflite-face-landmark
tar xvf bazel-bin/tflite-simd-face-landmark -C ../public/tflite-face-landmark
