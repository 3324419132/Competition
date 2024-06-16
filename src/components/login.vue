<script setup lang="ts">
import { ElMessage, ElForm } from 'element-plus';
import { ref, reactive, defineExpose } from 'vue';
import { login } from '/src/api/index';

// 定义响应式变量
const loginDialogVisible = ref(false);

// 处理对话框关闭
const handleClose = (done: () => void) => {
    done();
};

// 定义表单数据接口
interface formData {
    account: string;
    password: string;
}

// 创建响应式表单数据
const loginData: formData = reactive({
    account: '',
    password: ''
});

// 表单对齐方式
const labelPosition = ref('top');

// 声明表单引用
const form = ref<ElForm>();

// 控制弹窗显示
const open = () => {
    form.value?.resetFields(); // 重置表单验证状态
    loginDialogVisible.value = true;
};

// 表单控制规则
const rules = reactive({
    account: [
        { required: true, message: '请输入您的账号', trigger: 'blur' },
        { min: 3, max: 11, message: 'Length should be 3 to 16', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入你的密码', trigger: 'blur' },
        { min: 3, max: 16, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
});

const confirmLogin = async () => {
    if (!loginData.account || !loginData.password) {
        ElMessage({
            type: 'warning',
            message: '请填写完整信息',
        })
    } else {
        try {
            // 确认登录
            const res =await login(loginData)
            console.log(res)
            loginDialogVisible.value = false
            ElMessage({
                type: 'success',
                message: '登录成功',
            })
        } catch (error) {
            console.error(error)
            ElMessage({
                type: 'error',
                message: '登录失败，请重试',
            })
        }
    }
}
defineExpose({ open });
</script>

<template>
    <el-dialog v-model="loginDialogVisible" title="登录" width="400" :before-close="handleClose" :draggable="true">
        <template #footer>
            <!-- 登录 -->
            <el-form :model="loginData" :label-position="labelPosition" :rules="rules" ref="form">
                <el-form-item label="账号：" prop="account" class="mt-2">
                    <el-input v-model="loginData.account" placeholder="请输入账号" maxlength="11" minlength="11" />
                </el-form-item>
                <el-form-item label="密码：" prop="password" class="mt-4">
                    <el-input v-model="loginData.password" placeholder="请输入密码" maxlength="16" />
                </el-form-item>
                <el-button @click="loginDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="confirmLogin">
                    确认
                </el-button>
            </el-form>
        </template>
    </el-dialog>
</template>

<style>
/* 不允许拖拽复制 */
.no-select {
    user-select: none;
}
</style>
