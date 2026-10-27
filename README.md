# FOR-MY-DSH

Personal [DeepSeek Harness](https://github.com/deepseek-ai) plugin bundle.

## Install

Paste the repository URL into DSH → Plugins → Add Git repository:

```
https://github.com/TJCfez/FOR-MY-DSH
```

## Layout

| File | Purpose |
| --- | --- |
| `package.json` | package metadata + `dsh.bundle.patch` pointer |
| `cordis.patch.yml` | bundle patch layer that mounts the plugin |
| `index.js` | plugin entry (`name` + `apply`) |

## Develop

Edit `index.js`, commit, then reinstall the plugin (DSH pins the git commit,
so a new commit needs a reinstall).