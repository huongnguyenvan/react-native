
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

## 3. Các IDE khuyên dùng

- Code: Hiện tại mình sử dụng Visual Studio Code các bạn có thể download về và cài đặt tại <https://code.visualstudio.com/> <br> Các bạn cũng có thể sử dụng bất kỳ IDE nào các bạn thích như Sublime Text Atom, Vim Editer...
- Build ứng dụng: 
 - IOS: sử dụng Xcode (search trên store apple nhé)
 - Android: sử dụng Android studio <https://developer.android.com/studio/>

P/s: Nếu sử dụng MAC thì nên dùng Xcode để chạy ứng dụng. Bởi vì một số lý do như: Run các lần sau nhanh hơn, xem log debug mà không cần bật chức năng Debug JS Remotely và quan trọng là làm quen với một số chức năng của Xcode để lúc xảy ra lỗi fix lỗi nhanh hơn. <br> Với Android thì có một vài trở ngại khi dùng Android studio như việc run mà không dùng code react-native mới nhất, chức năng host reloading cũng khó hoạt động.

## 4. Khởi tạo dự án đầu tiên
- **Bước 1**: Khởi tạo dự án: mở Terminal (cmd) sau đó gõ lệnh này vào  (cd vào thư mục bạn muốn tạo dự án trước)<br>
```react-native init ProjectName```

- **Bước 2**: Truy cập vào dự án vừa tạo.<br>
```cd ProjectName```

- **Bước 3**: Chạy ứng dụng trên hệ điều hành:<br>
IOS: ```	react-native run-ios``` <br>Android: ```react-native run-android```

Khi chạy lệnh này hệ điều hành sẽ tạo một server local để build code react của bạn. Kèm theo đó là chạy các lệnh để build ứng dụng.<br>Bạn cũng có thể mở file /ios/ProjectName.xcodeproj bằng Xcode để khởi chạy ứng dụng, hoặc mở nguyên thư mục android bằng Android studio để khởi chạy ứng dụng.

- **Hiển thị Menu điều khiển**:
 - Command + D (hoặc lắc điện thoại IOS) để hiển thị menu điều khiển khi run debug ứng dụng trên MacOS.
 - ctrl + D hoặc phím menu để hiển thị menu điều khiển khi run debug ứng dụng trên Windown.
 - Command + R để reload lại source code máy ảo IOS
 - R + R để reload lại source code máy ảo Android.

- **Một vài lệnh vui vui để sửa lỗi**  (Bật terminal or cmd trong dự án vừa khởi tạo)

 - Không khởi tạo server để build khi run debug trên android thì chạy
 ```react-native start```
 
 - Khi run Android mà không sử dụng code react-native mới nhất thì chạy dòng này (Build toàn bộ source của bạn thành 1 file và đặt nó vào trong assets, tạo các resource android tương ứng mà bạn sử dụng).
```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```
 - Khi general APK mà bị lỗi double resource thì xóa thư mục drawable trong android/app/src/main/res thì sẽ build được.
 
 - Khi run app ios bị lỗi "Build input file cannot be found: '../Example/node_modules/react-native/third-party/double-conversion-1.1.6/src/strtod.cc'" thì chạy 2 dòng lệnh sau:
 
 ```
cd node_modules/react-native/scripts && ./ios-install-third-party.sh && cd ../../../
cd node_modules/react-native/third-party/glog-0.3.5/ && ../../scripts/ios-configure-glog.sh && cd ../../../../
```
Chú ý version phiên bản glog-0.3.5 mà bạn đang sử dụng.


- **Khuyến cáo**: Sau những lần tìm hiểu và phát triển ứng dụng thì tác giả khuyến cáo không nên sử dụng Expo (framework của react) để phát triển ứng dụng đơn giản. Bởi vì dự án của bạn sẽ nặng lên, bạn sẽ khó quản lý permission và các thư viện đi kèm.

## 5. Các thành phần cơ bản của dự án
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


## 6. Component trong React-Native
Component là một thành phần cơ bản trong ứng dụng react-native. Mọi view, screen đều được kế thừa từ lớp component này.

### 6.1. Vòng đời của component
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



### 6.2. Các thành phần cơ bản của component
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

### 6.3. Một số hàm đặc biệt

- **Hàm this.setState()** - Hàm dùng để thay đổi state của component. Đây là phương thức chính để cập nhật giao diện người dùng. Khi hàm này thực thi xong thì hàm **render()** sẽ được tự động gọi lại. **Những giá trị nào của state thay đổi thì chỉ những thành phần có sử dụng biến state tương ứng đó được gọi để vẽ lại UI**.
<br>Lưu ý: hàm này chạy bất đồng bộ nên chúng ta không nên đọc giá trị sau khi gọi hàm này. <br>Cách sử dụng: 

```javascript
this.setState({
	message: "Chào mừng",
	key: "Value",
})
console.log(this.state.message) //không nên
// không sử dụng this.state ngay sau khi vừa set xong
// biến truyền vào cho hàm setState là một đối tượng có dạng key: value.

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

### 6.4. Một vài lưu ý nhỏ khi dùng React-Native
- Dữ liệu cần in ra màn hình và cần thay đổi lại UI khi nó thay đổi thì đặt vào state.
- Dữ liệu không cần thay đổi UI khi nó thay đổi thì có thể dùng ```this.xxx``` như vậy biến này có thể thực hiện thao tác = (gán) và sử dụng trực tiếp như các biến thông thường.
- Dữ liệu trong prop thì không nên thay đổi.
- Trong **state** chỉ nên chứa dữ liệu, không nên chứa các **View / Component** vào trong state. Làm như vậy có thể gây double dữ liệu và việc quản lý UI trở nên phức tạp hơn và khó tùy biến sau này.

## 7. Thiết kế View (Style)

Sau đây là một đoạn code Demo về Style của ứng dụng React-Native. Code có sẵn trong Example (Example/app/modules/screens/Home/StyleDemo)

```javascript
export class StyleDemo extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

```

Giống như một ứng dụng web cơ bản, React-Native sử dụng một số thẻ css để vẽ những gì bạn muốn. Nếu bạn là lập trình web quen thuộc với css thì việc thiết kế này khá đơn giản. Để trau dồi những khả năng này chỉ có cách là làm nhiều bạn sẽ tìm hiểu những style bạn muốn và sẽ làm ứng dụng của bạn đẹp hơn.

Ở ví dụ trên bạn có thể thay đổi các thuộc tính của style rồi reload lại để thấy sự thay đổi nhé.

Trong ví dụ thư mục Home tôi đã chia phần Style qua một file khác để dễ quản lý (Từ các ví dụ sau trở đi, tôi sẽ chia phần style này sang 1 file khác để dễ quản lý). Bạn có thể vào đó, thử thay đổi, xóa sửa để biết được thuộc tính nào dùng để làm gì nhé. Làm nhiều phần này thì sẽ có kinh nghiệm thiết kế đẹp thôi. 

Một vài lưu ý:

- Bạn nên biết thuộc tính nào dùng để làm gì, sử dụng tối ưu để hiệu quả nhất (Có thể copy code của ai đó nhưng nên hiểu dòng style nào làm việc gì).
- Không nên quá rườm rà code ngắn nhưng đạt được yêu cầu là tốt nhất.



## 8. Kỹ thuật Debug cơ bản

Xây dựng ứng dụng React-Native khác với ứng dụng native là bạn không thể đặt break point rồi chạy và chờ chương trình nhảy vào vị trí mà bạn đợi và xem trạng thái hay biến lúc đó bằng bao nhiêu đang như thế nào. Thay vì vậy chương trình React-Native cho phép bạn in giá trị tại thời điểm đó và xuất ra màn hình console.<br> Sử dụng lệnh 
```console.log(variable)``` để in giá trị của biến bất kì (xem ví dụ phía trên để biết việc in giá trị của biến message trong state)

Xcode và Android studio mặc định khi run debug sẽ xuất các log này ra trong phần All Output (Xcode), Logcat (Android Studio).

Bên cạnh đó bạn có thể sử dụng chức năng Debug JS Remotely (xem phần hiển thị menu điều khiển trong mục 4) để thấy các log này trong phần console của trình duyệt web.

Ngoài ra bạn có thể sử dụng terminal (cmd) để xem log IOS hoặc Android bằng cách gõ lệnh:

```
react-native log-ios
//or
react-native log-android

```

## 9. Các Component thường sử dụng
Dưới đây là code demo những component cơ bản thường sử dụng. Bạn có thể code lại, copy hoặc chạy demo từ example.

```javascript
import React from 'react';
import { Image, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import Styles from './styles';
import { Colors } from '../../../configs/style';

export class Components extends React.Component {
	//Header ứng dụng (tùy chọn)
    static navigationOptions = ({ navigation }) => {
        return {
            title: "COMPONENT",
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
                alignSelf: 'center'
            }
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            message: "Message 2",
            listData: [
                {
                    image: require('../../../assets/images/ios.png'),
                    title: "IOS"
                },
                {
                    image: require('../../../assets/images/android.png'),
                    title: "Android"
                },
                {
                    image: require('../../../assets/images/react-native.png'),
                    title: "React Native"
                }
            ]
        }
        this.clickButton = 0;
        this.clickTouchAbleOpecity = 0;
    }
    
    onPressButtonDemo() {
        this.clickButton++;
        this.setState({
            message: "Clicked Button: " + this.clickButton
        })
    }

    onPressTouchableOpacityDemo() {
        this.clickTouchAbleOpecity++;
        this.setState({
            message: "Clicked TouchableOpacity: " + this.clickTouchAbleOpecity
        })
    }

    render() {
        return (
            <View style={Styles.container}>
                {/* Hiển thị Một message lên màn hình */}
                <Text style={Styles.textMessage}>WELCOME TO TEXT OF REACT-NATIVE</Text>
                <View style={Styles.containImage}>
                    {/* Hiển thị ảnh từ local resource */}
                    <Image
                        style={Styles.imgLogo}  /* Style của ảnh */
                        resizeMode={'contain'}  /* chế độ hiển thị (center, contain, cover, repeat, stretch )  của ảnh */
                        source={require('../../../assets/images/react-native.png')}
                    />

                    {/* Hiển thị ảnh từ web/server */}
                    <Image
                        style={Styles.imgLogo}
                        resizeMode={'contain'}
                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                    />
                </View>
                {/* In một giá trị của state lên màn hình */}
                <Text style={Styles.textMessage}>{this.state.message}</Text>

                {/* Sử dụng Button với chức năng press vào nút */}
                <Button
                    onPress={() => this.onPressButtonDemo()}
                    title="Click Me!"
                    color="#841584"
                />

                {/* Sử dụng TouchableOpacity với chức năng press giống như button */}
                <TouchableOpacity
                    style={Styles.btnStyle}
                    onPress={() => this.onPressTouchableOpacityDemo()}>
                    <Text style={Styles.textAction}>Touchable Opacity</Text>
                </TouchableOpacity>


                {/* Sử dụng FlatList để hiển thị ra một danh sách */}
                <FlatList
                    data={this.state.listData}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }

    /* Hiển thị chi tiết 1 item như thế nào */
    renderItem(item) {
        return (
            <View style={Styles.containerItem}>
                <Image
                    style={Styles.imgLogo} 
                    resizeMode={'contain'}  
                    source={item.image}
                />
                <Text>{item.title}</Text>
            </View>
        )
    }
}

```

Sau khi chạy Demo click vào Component ta được UI như sau

![](images/demo_component.jpg)

### 9.1. View 
Là một component cũng thường xuyên được sử dụng. Thường được sử dụng với mục đích chia các view con theo hàng dọc hoặc hàng ngang dựa vào thuộc tính flexDirection trong style là 'column/row' (dọc / ngang), hoặc sử dụng để chứa nhiều view con hoặc khi cần in ra màn hình một view không hiển thị gì hết ví dụ như trong cấu trúc toán tử:

```
{
	(Điều kiện) ?  <Text> Text Message <Text> : <View/>
}
```
flex: 1 ở style sẽ giúp kéo view rộng hết khung chứa có thể.

### 9.2. Text
Dùng để hiển thị 1 message lên màn hình. Có thể sử dụng text cố định hoặc in nội dung của một biến lên màn hình 
```<Text>{variable_here}<Text>```
### 9.3. Image
Dùng để hiển thị hình ảnh lên màn hình. Có 3 cách hiển thị:

- Hiển thị ảnh Local:

```
	<Image
		source={require('/react-native/img/favicon.png')}
	/>
```

- Hiển thị ảnh từ url:

```
	<Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
```

- Hiển thị ảnh base 64:

```javascript
	  <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
```


Resize Mode quen thuộc:

- cover: (mặc định) Hình ảnh sẽ giữ nguyên tỷ lệ. Ảnh sẽ lớn hơn hoặc bằng khung chứa.
- contain: Hình ảnh vẫn giữ nguyên tỷ lệ. Ảnh sẽ nhỏ hơn hoặc bằng khung chứa
- center: Căn giữa hình ảnh theo 2 chiều. Lấy phần ở giữa, gần giống với cover.

- repeat: Lặp lại hình ảnh để che hết phần kích thước ô chứa.
- stretch: Thay đổi tỷ lệ hình ảnh để kéo dãn bằng với ô chứa.


### 9.4. Button
Cách sử dụng một Button


```javascript

onPressButtonDemo(){
	console.log("Click Button")
}

....
<Button
 	onPress={() => this.onPressButtonDemo()}
	title="Click Me!"
	color="#841584"
/>

```

Thông thường mình ít khi sử dụng Button vì lý do custom style nó không hoạt động đúng với cả Android và IOS vì vậy nên mình thường sử dụng TouchableOpacity hơn.
Nhưng lưu ý cách sử dụng sự kiện onPress ```onPress={() => this.onPressButtonDemo()}``` Vui lòng viết theo cấu trúc này để giảm thiểu lỗi hoặc là phải binding hàm trong contrucstor trước lúc sử dụng. Sự kiện onPress chỉ có một số component hỗ trợ, Text thì không hỗ trợ nên nếu muốn sử dụng onPress cho Text thì đọc phần TouchableOpacity phía dưới nhé.


### 9.5. TouchableOpacity
Thông thường mình thay thế việc sử dụng Button bằng TouchableOpacity để việc định dạng style giống nhau cho cả android và ios, TouchableOpacity có thể chứa bất kỳ view con nào, và nhớ lưu ý cách dùng sự kiện onPress giống như Button nhé.

```javascript
 <TouchableOpacity
 	style={Styles.btnStyle}
 	onPress={() => this.onPressTouchableOpacityDemo()}>
 	<Text style={Styles.textAction}>Click Me</Text>
</TouchableOpacity>
```

### 9.6. Flatlist
Đây là Component thường được sử dụng để hiển thị 1 danh sách lên màn hình. <br>Cách dùng:

```javascript
<FlatList
	data={this.state.listData}
	renderItem={({ item }) => this.renderItem(item)}
	keyExtractor={(item, index) => index.toString()}
/>

/* Hiển thị chi tiết 1 item như thế nào */
renderItem(item) {
    return (
        <View style={Styles.containerItem}>
            <Image
                style={Styles.imgLogo} 
                resizeMode={'contain'}  
                source={item.image}
            />
            <Text>{item.title}</Text>
        </View>
    )
}
```

Một vài lưu ý khi sử dụng Flatlist:

- Khi một thành phần data (ví dụ data[0] = ...) của bạn thay đổi thường thì không vẽ lại UI cho nên bạn sẽ cần thêm một thuộc tính là ```extraData={this.state}```. Lúc này mỗi lần state thay đổi thì danh sách lại được vẽ lại.

- Có thể sử dụng Flatlist để làm như GridView trong android dựa vào thuộc tính numColumns={colum} (colum là số cột). Nhưng bạn sẽ cần phải tính toán width, height của mỗi colum để hiển thị đẹp nhất (Không có sẵn như fill_parent trong android).


Các component ở trên mình chỉ mang tính chất giới thiệu để các bạn tìm hiểu. Để hiểu rõ hơn cũng như tìm hiểu thêm về các thuộc tính của mỗi component thì vui lòng đọc riêng tài liệu của các Component nhé.
Mỗi component sẽ có nhiều thuộc tính khác để hỗ trợ bạn làm UI tốt và mượt nhất có thể.

## 10. Prop và cách truyền dữ liệu giữa các View (Screen)


## 11. Cài đặt và sử dụng thư viện
### 11.1. Cài đặt thư viện
### 11.2. Sử dụng thư viện

## 12. Giao tiếp Client vs Server
### 12.1. RESTful API.
### 12.2. Websocket

## 13. Lưu trữ dữ liệu
### 13.1. Storage:
### 13.2. Database:

## 14. Đa Ngôn ngữ

## 15. Giao tiếp với Native

## 16. Quy chuẩn tên biến và cấu trúc chương trình
Khi bạn tìm hiểu được kha khá các vấn đề về React-Native và code được một vài chương trình đơn giản thì cũng là lúc chúng ta nên xem lại các quy chuẩn thiết kế, cũng như quy chuẩn về tên biến để:

- Khi đọc lại bớt bỡ ngỡ (trước mình code cái gì vậy)
- Người khác đọc vào biết bạn đang làm gì?
- Có thể bạn khác join vào dự án biết cách sửa đổi.
- Làm dự án lớn nhiều người tham gia.
- ....

Tác giả dưa ra một số quy chuẩn cơ bản trên cái nhìn của tác giả
### 16.1. Tên biến:

### 16.2. Cấu trúc chương trình:












