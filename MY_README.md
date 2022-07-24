# 在原项目基础上搭建基于 Mediapipe 的 face landmark 系统

## Docker 构建

```sh
# 构建镜像
docker build -t tflite tflite

# 运行容器
docker run -it -v $PWD:/workspace -w /workspace tflite

# VSC docker attach

# 参照 entrypoint.sh 在容器内执行对应命令，编译出 wasm
```

## FAQ

1、[docker-error-failed-to-register-layer-symlink](https://stackoverflow.com/questions/44942790/docker-error-failed-to-register-layer-symlink)
