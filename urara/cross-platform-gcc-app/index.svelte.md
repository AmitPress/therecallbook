#### Contents

#### C/C++ backends
সি বা সি++ এর জন্য অনেক গুলি ব্যাকইন্ড আছে যেমন gcc, clang, tcc etc.
এগুলোর মদ্ধে gcc সবচেয়ে বেশি প্রচলিত ।

####  Variants of GCC
gcc এরও অনেক গুলো অপশন পাওয়া যায় । gcc, মূলত GNU gcc নামে পরিচিত, যার পূর্ণ্নাম হচ্ছে GNU Compiler Collection (GCC) । তো গ্নু, gcc এর স্টান্ডার্ডাইজেশন করে থাকে ।

Unix, BSD, Windows ইত্যাদির জন্য গ্নু জিসিসির এক বা একাধিক সাবসেট বা সুপারসেট ধরনের ইমপ্লিমেন্টেশন পাওয়া যায় । যেমনঃ উইন্ডোজের জন্য মিঞ্জিডব্লিউ(mingw), TDMgcc ইত্যাদি । তবে mingw অত্যাধিক জনপ্রিয়। MingW র মানে হচ্ছে Minimalist gcc for Windows । 

#### Making a cross platform GCC app
যেমনটি আমরা দেখলাম যে জিসিসি ক্রস কম্পাইল্ড নয়। এটা প্রতিটা প্লাটফর্মের জন্য আলাদা আলাদা ভাবে পাওয়া যায়। কিন্তু আমরা চাইলে জোড়া তালি দিয়ে একটা এপ্লিকেশন তৈরি করতে পারব যেটা ক্রসপ্ল্যাটফর্ম কম্প্যাটিবল।

#### How is it possible
GCC র কিছু মডিফাইড ফ্লেভার আছে যেগুলো উইনিক্স স্টাইল এপিয়াই সাপোর্ট করে। যেমনঃউইন্ডোজে unistd.h, netdb.h, sys/socket.h ইত্যাদি হেডার ফাইল গুলো নেই যেগুলো লিনাক্সে পাওয়া যায়। আবার  arpa/inet.h যেটা ম্যাকে পাওয়া যায় সেটাও মিসিং। মোটকথা *nix system এর ম্যাক্সিমামই not available । তো ক্রসকম্পাইল করতে হলে হয় লাইব্রেরি গুলোর সমন্বয় সাধন করতে হবে অথবা সমন্বিত লাইব্রেরিই ব্যবহার করতে হবে।

#### Using Meta Programming
প্রিপ্রসেসর দিয়ে আমরা সহযেই on demand লাইব্রেরি ইনক্লুড করতে পারি। যেমনঃ

```c
#ifdef __linux__
    #include<sys/socket.h>
#elif _WIN32
    #include<winsock.h>
#else
    #error "could not find"
#endif
```
#### Using special gcc implementation
আবার সুধুমাত্র *nix স্টাইলে বা api ব্যবহার করেও শুধুমাত্র কিছু স্পেশাল লাইব্রেরি ব্যবহার করে তা সাধন করা যায়। যেমনঃ
- Msys2
- Cygwin

কিন্তু এদের মাঝেও কিছু প্রেফারেন্স আছে।

#### Msys2 vs Cygwin

|Msys2|Cygwin|
| ---------------- | ---------------- |
|Most used | Equally Famous |
|Built on Cygwin | Independent |
|Hard to work on | Easy to work on |
|Has a decent pkg manager | Has some pkg management system |

#### Conclusion
ক্রস কম্পাইলেশনের জন্য meta programming ই সেরা। তাও যদি লাইব্রেরির মাধ্যমে সাধন করতেই হয় সেই সুবিধা তবে আমার পচ্ছন্দ Cygwin যদিও Cygwin এর এক আলাদা লেভেলের যন্ত্রনা বিদ্যমান।

`Cygwin এর উপর শিঘ্রই আর্টিকেল লিখব তবে ইংরেজিতে।`