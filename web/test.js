function test(user) {
    this.a = user.one;
    this.b = user.two;
    this.c = user.three;
}

var user = {'a': 1};
test(user);
console.log(test(user));
