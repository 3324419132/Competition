<script setup>
import { useConfigDataStore,usePageDataStore } from '/src/store/config/index.js';
import { useUserDataStore } from '/src/store/user/index.js';
import { ref, onMounted } from 'vue';
import loginVue from '/src/components/login.vue';
import router from '../../router';


const configData = useConfigDataStore();
const userData = useUserDataStore();
const { pageConfigData, changePageIndex } = usePageDataStore(); 

// 登录
const login = ref();

// 登录事件
const loginDialogVisibleControl = () => {
    login.value.open();
};

// 当前页码
const activeIndex = ref(localStorage.getItem('activeIndex') || '/home');

// 监听路由变化
router.afterEach((to) => {
    if (to.path === '/menu') {
        activeIndex.value = 'home'
    }
    else activeIndex.value = to.path;
    console.log(to.path)
    localStorage.setItem('activeIndex', to.path); // 保存到 localStorage
});

// 页面加载时恢复状态
onMounted(() => {
    // const currentPath = router.currentRoute.value.path;
    // activeIndex.value = currentPath;
    // localStorage.setItem('activeIndex', currentPath);
});
</script>

<template>
    <el-container>
        <el-header class="w-full h-1 pl-36 flex items-center justify-between">
            <div style="width: 100%;" class="flex items-center">
                <p style="color: #446eff;font-weight: 700;font-size: 15px;min-width: 100px;">某市职业学校教学能力大赛</p>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" router>
                    <el-menu-item index="/home">首页</el-menu-item>
                    <el-menu-item index="/brochures">比赛指南</el-menu-item>
                    <el-menu-item index="/enrolment">我要报名</el-menu-item>
                    <el-menu-item index="/judgement">进入专家评审</el-menu-item>
                </el-menu>
            </div>
            <div style="width: 10%;">
                <el-button type="primary" v-if="userData.token == null" size="small"
                    @click="loginDialogVisibleControl">登录</el-button>
                <el-dropdown v-if="userData.token != null">
                    <span class="el-dropdown-link">
                        <div style="display: flex;align-items: center;justify-content: center;padding: 2px 2px 2px 2px;">
                            <el-avatar :size="30" src="/src/image/icon/avatar.jpg" />
                            <p style="margin-left: 10px;">{{ userData.nickname }}</p>
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </div>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                            <!-- <el-dropdown-item>Action 3</el-dropdown-item> -->
                            <!-- <el-dropdown-item disabled>Action 4</el-dropdown-item>
                            <el-dropdown-item divided>Action 5</el-dropdown-item> -->
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer class="flex items-center justify-center flex-col">
            <span style="color: #a1a3a7;" class="block text-base">有使用问题，请联系{{ configData.nickname }}: {{
                configData.phone
                }}</span>
            <span style="color: #a1a3a7;" class="block text-base">Copyright © 2022 dadoucheng. All rights
                reserved.</span>
        </el-footer>
        <loginVue ref="login"></loginVue>
    </el-container>
</template>

<style>
.el-dropdown{
    /* width: 10vw; */
    padding: 2px 2px 2px 2px;
    display: flex;
    justify-content: center;
}
.el-dropdown-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 2px 2px 2px;
    /* border: 1px solid yellow */
}
.el-container {
    width: 100vw;
    height: 100vh;
}

.el-menu {
    height: 30px;
    margin-left: 10%;
}

.el-header {
    width: 100%;
    height: 40px;
    padding: 15px 2% 15px 8%;
}

.el-main {
    width: 100%;
    padding: 0%;
}

.el-footer {
    width: 100%;
    height: 80px;
    background-color: #1e2023;
}
</style>
