# umi-block-migrate-helper

自动给老的 umi 区块添加 blockConfig:

```json
"blockConfig": {
  "specVersion": "0.1"
}
```

Why? for https://github.com/umijs/umi/pull/2311#pullrequestreview-230631363

## Usage

```shell
$ npm i umi-block-migrate-helper -g
$ cd [your blocks directory]
$ umi-block-migrate-helper
```
