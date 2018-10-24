
![React Native Logo](images/react-native.png)

# CODE 101 - React Native

Chào mừng các bạn đến với hướng dẫn học React-Native cho người mới bắt. Sau đây là một số chia sẻ, hướng dẫn của mình cho người mới bắt đầu tìm hiểu về React-Native. Qua đó nhằm giúp các bạn có cách nhìn tổng quát hơn và dễ dàng tìm hiểu vấn đề khi mới chập chững bước chân vào lập trình với React-Native.

P/s: Bài viết chủ yếu dựa trên tài liệu chính thống của React-Native phiên bản 0.56 tại <https://facebook.github.io/react-native/docs/getting-started> kết hợp với sự hiểu biết cá nhân của mình vì vậy nếu có sai sót, anh em cứ góp ý để mình sửa đổi nhé.

# I. Mục tiêu hướng dẫn

#### - Hiểu được các thành phần cơ bản của React-Native.
#### - Nắm vững được vòng đời của một màn hình, component của React-Native.
#### - Tùy biến các component theo ý muốn.
#### - Tìm kiếm, sử dụng và tùy biến thư viện.
#### - Xây dựng 1 ứng dụng đọc báo như báo mới.

# II. Một vài lưu ý

#### - Hiện tại hệ điều hành Windowns chỉ build được ứng dụng Android.
#### - Hệ điều hành IOS có thể build được cả Android và IOS.
#### - Phiên bản IOS thấp nhất mà react-native có thể hỗ trợ là IOS 8.0
#### - Phiên bản Android thấp nhất mà react-native có thể hỗ trợ là Android 4.1 (API 16)
#### - Các hướng dẫn dưới đây ngoại trừ phần cài đặt, đều là hướng dẫn để xây dựng ứng dụng trên IOS. Một số chức năng có thể IOS hỗ trợ nhưng Android không hỗ trợ và ngược lại, nên nếu có lỗi các bạn có thể bình luận tại đây hoặc tìm kiếm google để nâng cao khả năng giải quyết vấn đề nhé.
#### - Để chạy các code mẫu, sau khi tải về vui lòng vào thư mục và chạy dòng lệnh ```npm install``` để tải toàn bộ thư viện cần sử dụng. Và chạy ```react-native run-ios``` để chạy ứng dụng trên IOS. ```react-native run-android``` để chạy ứng dụng trên hệ điều hành Android.


# II. HƯỚNG DẪN
## 1. Hướng dẫn cài đặt môi trường react-native trên hệ điều hành Windowns.

- **Bước 1**: Cài đặt Chocolatey từ <https://chocolatey.org> (Chocolatey là trình quản lý các gói thư viện của Windowns)
- **Bước 2**: Cài đặt Nodejs Java và Python 2 thông qua Chocolatey sử dụng dòng lệnh sau (dùng cmd để chạy lệnh này):<br>
```choco install -y nodejs.install python2 jdk8```

- **Bước 3**: Cài đặt Android studio
- **Bước 4**: Cài đặt SDK: Nên cài SDK Platform 23 vì mặc định react-native hiện tại sử dụng Android SDK Platform 23 để build ứng dụng 


Lưu ý: Trên hệ điều hành windowns chỉ có thể build ứng dụng trên Android.
## 2. Hướng dẫn cài đặt môi trường react-native trên hệ điều hành MAC OS

- **Bước 1**: Cài đặt Brew: Brew là trình quản lý các gói thứ viện, MACOS không tích hợp sẵn và bạn phải sử dụng terminal để cài đặt brew bằng cách chạy dòng lệnh sau. <br>
```{{/usr/bin/ruby -e "$(curl –fsSL https://raw.githubusercontent.com/ Homebrew/install/master/install)"}}```

- **Bước 2**: Cài đặt Nodejs:<br>
```brew install node```

- **Bước 3**: Cài đặt Watchman:<br>
```brew install watchman```

- **Bước 4**: Cài đặt react-native:<br>
```npm install -g react-native-cli```

- **Bước 5**: Cài đặt Xcode: truy cập App Store trên MACOS để cài đặt Xcode.
- **Bước 6** (option): Nếu bạn xây dựng ứng dụng android sử dụng hệ điều hành MACOS thì bạn cần cài đặt thêm các gói như JDK, Android Studio, Android SDK. (xem thêm phần cài đặt cho Windonws để hiểu rõ hơn.)


## 3. Khởi tạo dự án đầu tiên
- **Bước 1**: Khởi tạo dự án: mở Terminal (cmd) sau đó gõ lệnh này vào  (cd vào thư mục bạn muốn tạo dự án trước)<br>
```react-native init ProjectName```

- **Bước 2**: Truy cập vào dự án vừa tạo.<br>
```cd ProjectName```

- **Bước 3**: Chạy ứng dụng trên hệ điều hành:<br>
IOS: ```	react-native run-ios``` <br>Android: ```react-native run-android```

## 4. Các thành phần cơ bản của dự án
Cấu trúc thư mục mà bạn nhìn thấy có thể sẽ như dưới đây (tùy version react-native hiện tại của bạn). Hình dưới đây không bao gồm một vài file bị ẩn thuộc cấu hình của react-native<br>
![](images/first-project.jpg)

- **Thư mục Android**: chứa toàn bộ source build ứng dụng Android. Chúng ta có thể mở thư mục Android bằng Android studio và chạy ứng dụng thay vì sử dụng dòng lệnh ```react-native run-android``` nhưng có thể ứng dụng sẽ không build mã javascript được và sẽ xuất hiện màn hình trắng trên điện thoại android.

- **Thư mục IOS**: chứa toàn bộ source build ứng dụng IOS. Chúng ta có thể mở file ProjectName.xcodeproj bằng Xcode để run ứng dụng IOS thay vì sử dụng dòng lệnh ```react-native run-ios```. Lần đầu có thể chạy hơi lâu nhưng những lần tiếp theo sẽ nhanh hơn việc build bằng dòng lệnh.

- **Thư mục node_modules**: chứa toàn bộ các package (thư viện) cần để chạy một ứng dụng react-native.

- **File package.js**: file quản lý các package nodejs đi kèm với dự án. Nếu bạn tải các dự án demo về cần dử dụng dòng lệnh ```npm install``` để tải toàn bộ thư viện yêu cầu của dự án về.

- **File package-lock.js** file được general sau khi chạy cài đặt ```npm install```

- **File index.js**: file đầu tiên được binding khi chạy ứng dụng. File này sẽ đăng ký một component, component này sẽ được load lên đầu tiên khi chạy, mặc định ứng dụng sẽ đăng ký component trong App.js

- **File app.json**: file config tên ứng dụng và tên hiển thị.

- **File App.js** là một component mặc định có sử dụng một số Component khác như Text, View...


## 5. Component trong React-Native
Component là một thành phần cơ bản trong ứng dụng react-native. Mọi view, screen đều được kế thừa từ lớp component này.

### 5.1. Vòng đời của component
![](images/life-circle.png)
<br><em>(Nguồn:: internet)</em>

**Các hàm được gọi trong vòng đời của Component**

- **constructor(props)** - Hàm khởi tạo component. Trong hàm này chúng ta thường dùng để khởi tạo state, binding các hàm con của component.<br> Lưu ý: Không được thay đổi state bằng phương thức ```this.setState()``` trong hàm này.

- **componentWillMount()** - Hàm này sẽ bị loại bỏ ở phiên bản mới.

- **render()** - Đây là hàm bắt buộc có trong component. Sau khi khởi tạo hàm này được gọi để trả về các thành phần hiển thị lên màn hình.<br>Hàm này sẽ được tự động gọi lại khi state hoặc props của nó thay đổi. Chỉ những component có sử dụng state hoặc props thì mới được gọi lại để render lại.<br><br>**Lưu ý:**
  * Trong hàm này cũng không được sử dụng phương thức ```this.setState()```<br> 
  * Trong hàm này không nên chạy xử lý dữ liệu nhiều để không bị lag khi render (nên xử lý dữ liệu trong componentDidMount hoặc constructor).
  
- **componentDidMount()** - Hàm này sẽ được gọi ngay sau khi hàm **render()** lần đầu tiên được gọi. Thông thường trong hàm này ta có thể lấy dữ liệu từ server hoặc client để render dữ liệu ra. Khi chạy đến đây thì các phần từ đã được sinh ra rồi, ta có thể tương tác với các thành phần UI.

- **componentWillReceiveProps(nextProps)** - Hàm này được gọi khi props của component được khởi tạo thay đổi.

- **shouldComponentUpdate(nextProps, nextState)** - Hàm này được gọi trước render() khi cập nhật dữ liệu. Hàm này trả về giá trị true hoặc false. Nếu false thì không gọi lại hàm render mặc định nó trả về true.

- **componentWillUpdate(nextProps, nextState)** - Hàm này được gọi ngay sau khi hàm shouldComponentUpdate() trả về true. Trong hàm này cũng không được set lại state.

- **componentDidUpdate(prevProps, prevState)** - Hàm này được gọi ngay sau hàm render() từ lần thứ 2 trở đi.

- **componentWillUnmount()** - Hàm này được gọi khi component này bị loại bỏ. Chúng ta nên thực hiện các thao tác dọn dẹp, hủy timer hoặc các tiến trình đang xử lý.



### 5.2. Các thành phần cơ bản của component
Sau đây là chương trình mẫu cơ bản để ta hiểu được các thành phần của một Component

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome to Code 101 - React-native"
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.message}</Text>
            </View>
        );
    }
}
```
- **State** - là biến điều khiển trạng thái nội bộ của 1 component. State có thể thay đổi bằng cách gọi hàm this.setState({...}). Mỗi lần thay đổi state hàm render sẽ được gọi lại ngay sau đó (hàm render chỉ thay đổi những thành phần có liên quan đến những giá trị trong state bị thay đổi).<br> Chúng ta nên bỏ các biến có liên quan đến UI vào trong state này, để khi state thay đổi, UI màn hình sẽ được vẽ lại và thay đổi theo.
<br>**Lưu ý:** Không được thay đổi state trực tiếp bằng cách gọi this.state = {...} nếu sử dụng thay đổi state trực tiếp toàn bộ component này sẽ không còn hoạt động đúng như mong muốn nữa.

- **Props** - là các thuộc tính được thằng sử dụng truyền vào. Đây là các thông số được truyền vào để tùy chỉnh theo ý muốn của người xây dựng Component. Khác với state chúng ta không được thay đổi props ở trong chính bản thân của nó. Chúng ta chỉ nên đọc các thuộc tính được truyền vào để sử dụng mà thôi.<br> Ví dụ sử dụng props: cũng là ví dụ trên nhưng chúng ta custom một số thứ để bạn có thể hiểu rõ hơn về props.

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CustomText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>{this.props.message}</Text>   /*Sử dụng props được truyền từ ngoài vào.*/
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome to Code 101 - React-native"
        }
    }

    render() {
        return (
            <CustomText message={this.state.message} /> /*truyền 1 props vào cho thằng con sử dụng.*/
        );
    }
}
```

### 5.3. Một số hàm đặc biệt

- **Hàm this.setState()** - Hàm dùng để thay đổi state của component. Đây là phương thức chính để cập nhật giao diện người dùng. Lưu ý: hàm này chạy bất đồng bộ nên chúng ta không nên đọc giá trị sau khi gọi hàm này. <br>Cách sử dụng: 

```javascript
this.setState({
	message: "Chào mừng",
	key: "Value",
})
console.log(this.state.message) (không nên sử dụng như vậy)
// biến truyền vào cho hàm setState là một đối tượng có dạng key: value.
// không sử dụng this.state ngay sau khi vừa set xong
```

Có thể sử dụng callback để check dữ liệu hoặc xử lý một số tác vụ sau khi thay đổi trạng thái

```javascript
this.setState({
	message: "Chào mừng"
}, ()=>{
	console.log(this.state.message)   // kết quả: Chào mừng
})

```


- **Hàm forceUpdate()** - Mặc định hàm render() sẽ được gọi khi props hoặc state thay đổi. Nhưng nếu một vài thành phần UI sử dụng một số dữ liệu khác state hoặc prop muốn thay đổi, thì chúng ta cần thông báo cho React biết để vẽ lại toàn bộ bằng cách gọi hàm forceUpdate().

### 5.4. Một vài lưu ý nhỏ khi dùng React-Native
- Dữ liệu cần in ra màn hình và cần thay đổi lại UI khi nó thay đổi thì đặt vào state.
- Dữ liệu tĩnh không cần thay đổi UI khi nó thay đổi thì có thể dùng ```this.xxx``` như vậy biến này có thể thực hiện thao tác = (gán) và sử dụng trực tiếp như các biến thông thường.
- Dữ liệu trong prop thì không nên thay đổi.
- Trong **state** chỉ nên chứa dữ liệu, không nên chứa các **View / Component** vào trong state. Làm như vậy có thể gây double dữ liệu và việc quản lý UI trở nên phức tạp hơn nhiều khó tùy biến sau này.

## 6. Thiết kế View (Style)


## 7. Kỹ thuật Debug cơ bản


## 8. Các Component thường sử dụng
### 8.1. Text
### 8.2. Button
### 8.3. Image
### 8.4. Flatlist
### 8.5. ....

## 9. Prop và cách truyền dữ liệu giữa các View


## 10. Cài đặt và sử dụng thư viện
### 10.1. Cài đặt thư viện
### 10.2. Sử dụng thư viện

## 11. Giao tiếp Client vs Server
### 11.1. RESTful API.
### 11.2. Websocket

## 12. Lưu trữ dữ liệu
### 12.1. Storage:
### 12.2. Database:

## 13. Đa Ngôn ngữ

## 14. Giao tiếp với Native



## 15. Quy chuẩn tên biến

## 16. Cấu trúc chương trình












