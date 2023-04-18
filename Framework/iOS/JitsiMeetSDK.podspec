Pod::Spec.new do |s|
    s.name             = 'JitsiMeetSDK'
    s.version          = '7.0.1'
    s.summary          = 'Jitsi Meet iOS SDK'
    s.description      = 'Jitsi Meet is a WebRTC compatible, free and Open Source video conferencing system that provides browsers and mobile applications with Real Time Communications capabilities.'
    s.homepage         = 'https://github.com/jitsi/jitsi-meet-ios-sdk-releases'
    s.license          = 'Apache 2'
    s.authors          = 'The Jitsi Meet project authors'
    s.source = { :path => '../Framework/iOS/JitsiMeetSDK.xcframework' }
    s.platform         = :ios, '12.0'
    s.swift_version    = '5'
    s.vendored_frameworks = 'JitsiMeetSDK.xcframework'
    s.dependency 'Giphy', '2.1.20'
    s.dependency 'JitsiWebRTC', '~> 106.0'
  end