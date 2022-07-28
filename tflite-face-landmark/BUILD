# Description:
#   TensorFlow Lite minimal inference tool.

load("@org_tensorflow//tensorflow/lite:build_def.bzl", "tflite_linkopts")

cc_binary(
  name = "tflite-face-landmark",
  srcs = ["face-landmark.cc"],
  linkopts = tflite_linkopts() + [
    "-s ENVIRONMENT='web'",
    "-s ALLOW_MEMORY_GROWTH=1",
    "-s FILESYSTEM=0",
    "-s USE_PTHREADS=0",
    "-s MODULARIZE=1",
    "-s EXPORT_NAME=createTFLiteModule",
  ],
  deps = [
    "@org_tensorflow//tensorflow/lite:framework",
    "@org_tensorflow//tensorflow/lite:tflite_with_xnnpack",
    "@org_tensorflow//tensorflow/lite/kernels:builtin_ops",

    # /mediapipe_src/mediapipe/examples/desktop/BUILD:demo_run_graph_main
    "@org_mediapipe//mediapipe/framework:calculator_framework",
    "@org_mediapipe//mediapipe/framework/formats:image_frame",
    "@org_mediapipe//mediapipe/framework/port:file_helpers",
    "@org_mediapipe//mediapipe/framework/port:parse_text_proto",
    "@org_mediapipe//mediapipe/framework/port:status",
    "@com_google_absl//absl/flags:flag",
    "@com_google_absl//absl/flags:parse",
    # /mediapipe_src/mediapipe/examples/desktop/BUILD:demo_run_graph_main_gpu 额外字段
    # "@org_mediapipe//mediapipe/gpu:gl_calculator_helper",
    # "@org_mediapipe//mediapipe/gpu:gpu_buffer",
    # "@org_mediapipe//mediapipe/gpu:gpu_shared_data_internal",
    
    # /mediapipe_src/mediapipe/graphs/face_mesh/BUILD:mobile_calculators
    # "@org_mediapipe//mediapipe/calculators/core:flow_limiter_calculator",
    # "@org_mediapipe//mediapipe/graphs/face_mesh/subgraphs:face_renderer_gpu",
    # "@org_mediapipe//mediapipe/modules/face_landmark:face_landmark_front_gpu",
  ],
)

# TODO: 非 simd 完成后配置这里
cc_binary(
  name = "tflite-simd-face-landmark",
  srcs = ["face-landmark.cc"],
  linkopts = tflite_linkopts() + [
    "-s ENVIRONMENT='web'",
    "-s ALLOW_MEMORY_GROWTH=1",
    "-s FILESYSTEM=0",
    "-s USE_PTHREADS=0",
    "-s MODULARIZE=1",
    "-s EXPORT_NAME=createTFLiteSIMDModule",
  ],
  deps = [
    "@org_tensorflow//tensorflow/lite:framework",
    "@org_tensorflow//tensorflow/lite:tflite_with_xnnpack",
    "@org_tensorflow//tensorflow/lite/kernels:builtin_ops",
    "@org_mediapipe//mediapipe/util/tflite/operations:transpose_conv_bias",
  ],
)
