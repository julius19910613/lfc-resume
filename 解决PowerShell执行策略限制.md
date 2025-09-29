# 解决 PowerShell 执行策略限制问题

如果你在运行 npm 或 npx 命令时遇到以下错误：

```
npm : 无法加载文件 C:\Program Files\nodejs\npm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
```

这是因为 Windows PowerShell 默认的执行策略限制了脚本的运行。以下是几种解决方法：

## 方法1：使用批处理文件（推荐）

项目中已经提供了几个批处理文件，可以直接双击运行：

- `install.bat` - 安装依赖
- `dev.bat` - 启动开发服务器
- `export.bat` - 导出简历为PDF和PNG

## 方法2：修改 PowerShell 执行策略

如果你想直接在 PowerShell 中运行 npm 命令，可以按照以下步骤修改执行策略：

1. 以管理员身份打开 PowerShell（右键点击 PowerShell，选择"以管理员身份运行"）
2. 运行以下命令：
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```
3. 输入 `Y` 确认更改

这样设置后，你就可以在 PowerShell 中直接运行 npm 命令了。

## 方法3：使用命令提示符 (CMD)

你也可以使用 Windows 的命令提示符 (CMD) 来运行 npm 命令，CMD 没有执行策略的限制：

1. 按 `Win + R`，输入 `cmd`，按回车打开命令提示符
2. 导航到项目目录：
   ```cmd
   cd 路径\到\lfc-resume
   ```
3. 运行 npm 命令：
   ```cmd
   npm install
   npm run dev
   npm run export
   ```

## 方法4：一次性绕过执行策略

如果你只想临时运行一个命令，可以在 PowerShell 中使用以下格式：

```powershell
powershell -ExecutionPolicy Bypass -Command "npm install"
```

这会临时绕过执行策略来运行指定的命令。