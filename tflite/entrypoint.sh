#!/bin/sh
set -e

echo "拉取 TensorFlow 与 Mediapipe 最新代码"
git -C /tensorflow_src pull --rebase
git -C /mediapipe_src pull --rebase

echo "修改 tensorflow/BUILD 配置"
sed -i 's/"crosstool_top": "\/\/external:android\/emscripten"/"crosstool_top": "@emsdk\/\/emscripten_toolchain:everything"/' /tensorflow_src/tensorflow/BUILD

cd tflite

echo "bazel build tflite"
bazel build --config=wasm -c opt :tflite
echo "bazel build tflite simd"
bazel build --config=wasm --features=wasm_simd -c opt :tflite-simd

echo "构建产物移动到主项目"
tar xvf bazel-bin/tflite -C ../public/tflite
tar xvf bazel-bin/tflite-simd -C ../public/tflite
