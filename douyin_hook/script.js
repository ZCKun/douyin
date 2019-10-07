Java.perform(function() {
    console.log('---')
    var cls_b = Java.use('com.ss.android.ugc.aweme.f.a.b');
    var cls_UserInfo = Java.use('com.ss.android.common.applog.UserInfo');
    var cls_NetworkUtils = Java.use('com.ss.android.common.util.NetworkUtils');
    // var cls_a = Java.use('c.a.c.t').a.$new();
    console.log('===');
    console.log(cls_b);
    
    cls_b.a.implementation = function(t) {
        console.log('[hook] cls_b.a function...');
        var set_n = t.n().toArray();
        console.log('[cls_b.a] set_n:', set_n);
        
        console.log('[cls_b.a] server time:', cls_NetworkUtils.getServerTime());
        var param2 = [];
        set_n.forEach(function(a) {
            param2.push(a);
            param2.push(t.c(a));
        });
        param2 = Java.array("java.lang.String", param2);
        console.log('[cls_b.a] param2:', param2);
        var userInfo = cls_UserInfo.getUserInfo(Math.round(Date.now()*0.001), t.toString(), param2);
        console.log('[cls_b.a] UserInfo:', userInfo);
        var as = userInfo.substring(0, userInfo.length/2);
        var cp = userInfo.substring(userInfo.length/2, 0);
        console.log('[cls_b.a] as:', as);
        console.log('[cls_b.a] cp:', cp);
        // cls_a = t.q();
        // return cls_a.a('as', as).a('cp', cp).c();
        return this.a(t);
    }
})