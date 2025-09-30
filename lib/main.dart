import 'dart:convert';
import 'dart:typed_data';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '台中市3D景點地圖',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const LoginPage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _isLoading = false;
  bool _obscurePassword = true;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> _login() async {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    setState(() {
      _isLoading = true;
    });

    // 模擬登入 API 呼叫
    await Future.delayed(const Duration(seconds: 2));

    // 簡單的示範登入邏輯
    if (_emailController.text.isNotEmpty && _passwordController.text.isNotEmpty) {
      // 登入成功，跳轉到地圖頁面
      if (mounted) {
        Navigator.of(context).pushReplacement(
          MaterialPageRoute(
            builder: (context) => MapWebView(
              apiKey: 'AIzaSyDhFmyyK0ipeOreWD1D7Ry4wEE53EudGdA', // 從伺服器獲取的 API key
            ),
          ),
        );
      }
    } else {
      // 登入失敗
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('登入失敗，請檢查您的郵箱和密碼'),
            backgroundColor: Colors.red,
          ),
        );
      }
    }

    setState(() {
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              Color(0xFF1976D2),
              Color(0xFF42A5F5),
            ],
          ),
        ),
        child: SafeArea(
          child: Center(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(24.0),
              child: Card(
                elevation: 12,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(32.0),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        // Logo 和標題
                        const Icon(
                          Icons.map_outlined,
                          size: 80,
                          color: Color(0xFF1976D2),
                        ),
                        const SizedBox(height: 16),
                        const Text(
                          '台中景點地圖',
                          style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                            color: Color(0xFF1976D2),
                          ),
                        ),
                        const SizedBox(height: 8),
                        const Text(
                          '請登入以查看地圖',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey,
                          ),
                        ),
                        const SizedBox(height: 32),
                        TextFormField(
                          controller: _emailController,
                          decoration: InputDecoration(
                            labelText: 'Email',
                            prefixIcon: const Icon(Icons.email_outlined),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(12),
                            ),
                            filled: true,
                            fillColor: Colors.grey[50],
                          ),
                          keyboardType: TextInputType.emailAddress,
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return '請輸入郵箱';
                            }
                            if (!value.contains('@')) {
                              return '請輸入有效的郵箱地址';
                            }
                            return null;
                          },
                        ),
                        const SizedBox(height: 16),

                        // Password 輸入框
                        TextFormField(
                          controller: _passwordController,
                          decoration: InputDecoration(
                            labelText: 'Password',
                            prefixIcon: const Icon(Icons.lock_outlined),
                            suffixIcon: IconButton(
                              icon: Icon(
                                _obscurePassword
                                    ? Icons.visibility_outlined
                                    : Icons.visibility_off_outlined,
                              ),
                              onPressed: () {
                                setState(() {
                                  _obscurePassword = !_obscurePassword;
                                });
                              },
                            ),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(12),
                            ),
                            filled: true,
                            fillColor: Colors.grey[50],
                          ),
                          obscureText: _obscurePassword,
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return '請輸入密碼';
                            }
                            if (value.length < 6) {
                              return '密碼至少需要6個字元';
                            }
                            return null;
                          },
                        ),
                        const SizedBox(height: 24),

                        // 登入按鈕
                        SizedBox(
                          width: double.infinity,
                          height: 48,
                          child: ElevatedButton(
                            onPressed: _isLoading ? null : _login,
                            style: ElevatedButton.styleFrom(
                              backgroundColor: const Color(0xFF1976D2),
                              foregroundColor: Colors.white,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(12),
                              ),
                              elevation: 3,
                            ),
                            child: _isLoading
                                ? const SizedBox(
                                    height: 20,
                                    width: 20,
                                    child: CircularProgressIndicator(
                                      strokeWidth: 2,
                                      valueColor: AlwaysStoppedAnimation<Color>(
                                        Colors.white,
                                      ),
                                    ),
                                  )
                                : const Text(
                                    '登入',
                                    style: TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class MapWebView extends StatefulWidget {
  final String apiKey;

  const MapWebView({super.key, required this.apiKey});

  @override
  State<MapWebView> createState() => _MapWebViewState();
}

class _MapWebViewState extends State<MapWebView> {
  late final WebViewController controller;
  bool isLoading = true;

  @override
  void initState() {
    super.initState();

    controller = WebViewController();

    // 在行動裝置平台上需要手動啟用 JavaScript。網頁平台預設啟用。
    if (!kIsWeb) {
      controller
        ..setJavaScriptMode(JavaScriptMode.unrestricted)
        ..setNavigationDelegate(
          NavigationDelegate(
            onProgress: (int progress) {
              if (progress == 100) {
                setState(() {
                  isLoading = false;
                });
              }
            },
            onPageStarted: (String url) {
              setState(() {
                isLoading = true;
              });
            },
            onPageFinished: (String url) {
              setState(() {
                isLoading = false;
              });
            },
          ),
        );
    }

    _loadHtmlFromAssets();
  }

  Future<void> _loadHtmlFromAssets() async {
    try {
      // 讀取原始 HTML 檔案內容
      String htmlContent = await DefaultAssetBundle.of(context).loadString('assets/map1.html');

      // 替換 API key 占位符
      htmlContent = htmlContent.replaceAll('{{API_KEY}}', widget.apiKey);

      // 修復圖片路徑：將相對路徑轉換為 Flutter assets 路徑
      htmlContent = await _fixImagePaths(htmlContent);

      // 載入修改後的 HTML 並設定 baseUrl
      if (kIsWeb) {
        // Web 平台：需要設定正確的 baseUrl
        await controller.loadHtmlString(
          htmlContent,
          baseUrl: Uri.base.resolve('assets/').toString(),
        );
      } else {
        // 移動平台：使用 data URL 載入
        await controller.loadHtmlString(htmlContent);
      }

    } catch (e) {
      print('載入 HTML 失敗: $e');
      // 如果載入失敗，顯示錯誤訊息
      await controller.loadHtmlString('''
        <html>
          <body style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial;">
            <div style="text-align: center;">
              <h2 style="color: red;">載入失敗</h2>
              <p>無法載入地圖文件，請檢查網路連接</p>
            </div>
          </body>
        </html>
      ''');
    }

    setState(() {
      isLoading = false;
    });
  }

  Future<String> _fixImagePaths(String htmlContent) async {
    // 為每個圖片文件創建 data URL
    final imageFiles = [
      'taichung.gif',
      'image1.jpeg',
      'image2.jpeg',
      'image3.jpeg',
      'image4.jpeg',
      'image5.jpeg',
      'image6.jpeg',
      'image7.jpeg',
      'image8.jpeg',
      'image9.jpeg',
    ];

    for (String imageFile in imageFiles) {
      try {
        // 讀取圖片資料
        final ByteData data = await DefaultAssetBundle.of(context).load('assets/images/$imageFile');
        final Uint8List bytes = data.buffer.asUint8List();

        // 根據副檔名決定 MIME 類型
        String mimeType = imageFile.endsWith('.gif') ? 'image/gif' : 'image/jpeg';

        // 轉換為 base64 data URL
        String base64String = base64Encode(bytes);
        String dataUrl = 'data:$mimeType;base64,$base64String';

        // 替換 HTML 中的圖片路徑
        htmlContent = htmlContent.replaceAll('images/$imageFile', dataUrl);
      } catch (e) {
        print('無法載入圖片 $imageFile: $e');
      }
    }

    return htmlContent;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Stack(
          children: [
            WebViewWidget(controller: controller),
            if (isLoading)
              const Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    CircularProgressIndicator(
                      valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),
                    ),
                    SizedBox(height: 16),
                    Text(
                      '正在載入台中景點地圖...',
                      style: TextStyle(
                        fontSize: 16,
                        color: Colors.blue,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}
