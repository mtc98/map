# GitHub Pages 部署完整指南

## 📋 專案概覽
**專案**: 台中景點3D地圖 Flutter Web 應用  
**Repository**: https://github.com/mtc98/map  
**目標網址**: https://mtc98.github.io/map  
**部署日期**: 2024年9月30日

---

## 🚀 完整部署流程

### Step 1: 建立 Web 版本
```bash
# 確保在專案根目錄
pwd  # 應該顯示類似 /Users/test/Desktop/fmap

# 建立優化的 Web 版本
flutter build web --release
```

**輸出確認**：
- ✅ 看到 "✓ Built build/web" 訊息
- ✅ 檔案大小優化 (MaterialIcons 減少 99.5%)
- ✅ 編譯成功，無錯誤

### Step 2: 切換到 gh-pages 分支
```bash
# 切換到 gh-pages 分支 (如果不存在會自動建立)
git checkout gh-pages 2>/dev/null || git checkout -b gh-pages

# 確認目前分支
git branch
```

**預期結果**：
- 當前分支會顯示 `* gh-pages`
- 目錄中會包含 Web 編譯後的檔案

### Step 3: 提交 Web 檔案
```bash
# 添加所有檔案到 Git
git add .

# 提交變更 (含時間戳記)
git commit -m "deploy: GitHub Pages 部署 - 台中景點3D地圖Web版本 $(date '+%Y-%m-%d %H:%M:%S')"

# 推送到 GitHub
git push origin gh-pages
```

**成功指標**：
- ✅ 看到類似 `* [new branch] gh-pages -> gh-pages` 訊息
- ✅ GitHub 會顯示建立 pull request 的連結

### Step 4: 切回主分支
```bash
# 回到主分支繼續開發
git checkout main
```

---

## 🌐 GitHub Pages 設定步驟

### 🖱️ 手動設定 (必須在 GitHub 網站操作)

#### Step 1: 前往 Repository 設定
1. **開啟瀏覽器前往**：
   ```
   https://github.com/mtc98/map
   ```

2. **點擊頁面上方的 "Settings" 標籤**

#### Step 2: 設定 GitHub Pages
1. **在左側選單中找到並點擊 "Pages"**

2. **在 "Source" 區域配置**：
   - 選擇 **"Deploy from a branch"**
   - Branch: 選擇 **"gh-pages"**
   - Folder: 選擇 **"/ (root)"**

3. **點擊 "Save" 按鈕**

#### Step 3: 等待部署完成
- ⏳ 通常需要 2-5 分鐘處理
- 🔄 頁面會顯示部署狀態
- ✅ 完成後會顯示網站網址

---

## 🤖 自動化程度分析

### ✅ **可以用命令完成的部分**：
- Flutter Web 建立：`flutter build web --release`
- Git 分支切換：`git checkout gh-pages`
- 檔案提交推送：`git add . && git commit && git push`
- 分支管理：完全自動化

### ❌ **必須手動操作的部分**：
- **GitHub Pages 設定**：必須在 GitHub 網站上手動啟用
- **首次 Repository 建立**：需要在 GitHub 網站操作
- **權限和 Settings 配置**：GitHub API 限制，需要網頁操作

### 💡 **為什麼 Pages 設定無法自動化**：
1. **安全考量**：GitHub 不允許透過 Git 命令直接修改 Repository 設定
2. **API 限制**：需要特殊的 GitHub API token 和權限
3. **一次性設定**：通常只需要設定一次，後續更新都是自動的

---

## 🎯 最佳實踐工作流程

### 🔄 **初次部署** (需要手動設定)：
```bash
# 1. 建立並推送 Web 版本
flutter build web --release
git checkout gh-pages || git checkout -b gh-pages
git add .
git commit -m "deploy: 初次 GitHub Pages 部署"
git push origin gh-pages
git checkout main

# 2. 手動在 GitHub 網站設定 Pages (一次性)
# 前往 Settings → Pages → 設定 gh-pages 分支

# 3. 等待 2-5 分鐘即可訪問網站
```

### 🔄 **後續更新** (完全自動化)：
```bash
# 自動化腳本
./deploy_github.sh

# 或手動執行
flutter build web --release
git checkout gh-pages
git add .
git commit -m "update: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin gh-pages
git checkout main
```

---

## 📊 部署檢查清單

### ✅ **部署前檢查**：
- [ ] Flutter 專案可以正常執行：`flutter run -d chrome`
- [ ] 所有資源檔案存在：`ls assets/images/`
- [ ] Git 狀態乾淨：`git status`
- [ ] 主分支已推送：`git push origin main`

### ✅ **部署後檢查**：
- [ ] gh-pages 分支已建立：`git branch -a`
- [ ] Web 檔案已推送：`git log gh-pages --oneline -5`
- [ ] GitHub Pages 已設定：Settings → Pages 顯示綠色狀態
- [ ] 網站可以訪問：https://mtc98.github.io/map

### ✅ **功能測試**：
- [ ] 3D 地圖正常載入
- [ ] 景點標記可以點擊
- [ ] YouBike 資料正常顯示
- [ ] GPS 定位功能正常
- [ ] 圖片資源正確載入

---

## 🚨 常見問題與解決方案

### 問題1: 404 Page Not Found
**原因**: GitHub Pages 設定不正確  
**解決**: 確認 Settings → Pages → Branch 設為 "gh-pages"

### 問題2: 網站載入但功能異常
**原因**: 資源路徑問題  
**解決**: 檢查 assets 資料夾和圖片路徑

### 問題3: 推送失敗
**原因**: 認證問題  
**解決**: 設定 Personal Access Token

### 問題4: Web 建立失敗
**原因**: Flutter 環境問題  
**解決**: 
```bash
flutter clean
flutter pub get
flutter build web --release
```

---

## 📝 維護與更新

### 🔄 **日常更新流程**：
1. **修改程式碼** (在 main 分支)
2. **測試功能**: `flutter run -d chrome`
3. **提交變更**: `git add . && git commit -m "update: 描述"`
4. **推送主分支**: `git push origin main`
5. **部署更新**: `./deploy_github.sh`

### 📋 **版本管理**：
- **main 分支**: 開發版本，包含所有原始檔案
- **gh-pages 分支**: 部署版本，只包含 Web 編譯後檔案
- **標籤管理**: 使用 `git tag v1.0` 標記重要版本

---

## 🎉 部署成功確認

### ✅ **成功標誌**：
- GitHub Repository 存在且可訪問
- gh-pages 分支包含 Web 檔案
- GitHub Pages 設定顯示綠色狀態
- 網站 https://mtc98.github.io/map 可正常訪問
- 所有功能 (3D地圖、YouBike、定位) 正常運作

### 🌟 **最終成果**：
- **跨平台應用**: iOS/Android/Web/macOS 全支援
- **現代化技術棧**: Flutter + Google Maps 3D API
- **實用功能**: 景點導覽 + YouBike 整合 + GPS 定位
- **專業部署**: GitHub Pages 自動化部署流程
- **完整文檔**: 包含開發、部署、維護全流程

---

**部署完成日期**: 2024年9月30日  
**維護者**: Thomas Mei (mtc98tw@gmail.com)  
**Repository**: https://github.com/mtc98/map  
**Live Demo**: https://mtc98.github.io/map