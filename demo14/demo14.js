const app = Vue.createApp({
    data() {
        return{
            search:'',
            username:'',
            age:'',
            userInfos:[
                {username:'张三',age:'18'},
                {username:'李四',age:'20'}
            ]
        }
    },

    methods:{
        addUserName(newUserName,newAge){
            this.userInfos.push({username:newUserName,age:newAge});
            this.username = '';
            this.age = '';
        },

        deleteUser(index){
            this.userInfos.splice(index,1);
        }
    },

    computed:{
        userInformations(){
            return this.userInfos.filter((item)=>{
                return item.username.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    }
    // item.username.toLowerCase()和this.search.toLowerCase()是将username和search的内容转换为小写字母，确保比较时不受影响
    // includes()作用是判断转换为小写后search中的内容是否包含在username中，返回true或者false
    // filter()方法是遍历this.userInfos数组，然后找到符合条件的值将其返回到新数组中
    // 当函数内判断包含后返回true，就会将当前遍历的item（包含username和age属性）返回给userInformations[]数组
    // 当search没有输入的时候，search=''，includes('')总会返回true，所以就会将userInfos[]的内容全部返回给userInformations[]
}).mount('#app');