<script setup>
import { usePageDataStore,useConfigDataStore } from '/src/store/config/index.js';
const { pageConfigData, changePageIndex } = usePageDataStore();
const configData = useConfigDataStore();

</script>

<template>
    <el-main>
        <div class="w-full" style="height: 30vw; position: relative;max-height: 600px;min-width: 1500px;">
            <el-image class="w-full background-image" style="height: 30vw; pointer-events: none;max-height: 600px;"
                :src="configData.backgroundImageUrl" :fit="fit">
            </el-image>
            <div style="position: absolute; top: 5vw; left: 10vw;cursor: pointer;">
                <div style="min-width: 100px; font-size: 3.8vw;
                color: white; font-weight: 600; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
                padding: 10px;border-radius: 5px; width: 1100px;text-align: left;max-width: 1000px;">
                    2023某市职业学校教学能力大赛
                </div>
                <div style="min-width: 100px;padding: 5px 10px 5px 10px;
                border-radius: 1.5vw;background-color: white;height: 4vw;display: flex;
                align-items: center;justify-content: center;width: 8vw;margin-top: 10px;"
                    @click="this.$router.push('/enrolment');changePageIndex('/enrolment');">
                    <p style="font-size: 1.2vw;color: #436dfd;font-weight: 700;">我要报名</p>
                    <el-image src="/src/image/icon/right.svg" style="height: 1vw;margin-left: 2px">

                    </el-image>
                    <!-- <img src="/src/image/icon/right.svg" size="2vw"> -->
                </div>
            </div>
        </div>
        <div class="w-full" style="min-height: 280px;">
            <div style="width: 100%;height: 8vw;display: flex;
            align-items: center;justify-content: center;font-weight: 800;font-size: 3.5vw;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);margin-top: 2vw;">
                赛事流程
            </div>
            <div style="width: 100%;height: 10vw;display: flex;
            align-items: center;justify-content: center;margin-top: 20px;">
                <div
                    style="height: 100%;width: 90%;display: flex;align-items: center;justify-content: space-around;max-width: 1200px;">
                    <div style="width: 20vw;height: 10vw;border-radius: 10px;
                        background: linear-gradient(to right, #456dfe, #436eff,#446eff,#446eff);
                        max-width: 240px;max-height: 120px;display: flex;
                        justify-content: center;align-items: center;">
                        <div style="width: 5vw;height: 5vw;border-radius: 2.5vw;background-color: white;
                        display: flex;justify-content: center;align-items: center;">
                            <el-image src="/src//image//icon/enroll.svg" style="height: 3.5vw;">
                            </el-image>
                        </div>
                        <p style="margin-left: 10px;color: white;font-weight: 600;">登录报名</p>
                    </div>
                    <el-image src="/src/image/icon/right1.svg" style="height: 2.5vw;margin-left: 2px">

                    </el-image>
                    <div style="width: 20vw;height: 10vw;border-radius: 10px;
                        background: linear-gradient(to right, #456dfe, #436eff,#446eff,#446eff);
                        max-width: 240px;max-height: 120px;display: flex;
                        justify-content: center;align-items: center;">
                        <div style="width: 5vw;height: 5vw;border-radius: 2.5vw;background-color: white;
                        display: flex;justify-content: center;align-items: center;">
                            <el-image src="/src//image//icon/enroll.svg" style="height: 3.5vw;">
                            </el-image>
                        </div>
                        <p style="margin-left: 10px;color: white;font-weight: 600;">提交作品</p>
                    </div>
                    <el-image src="/src/image/icon/right1.svg" style="height: 2.5vw;margin-left: 2px">

                    </el-image>
                    <div style="width: 20vw;height: 10vw;border-radius: 10px;
                        background: linear-gradient(to right, #456dfe, #436eff,#446eff,#446eff);
                        max-width: 240px;max-height: 120px;display: flex;
                        justify-content: center;align-items: center;">
                        <div style="width: 5vw;height: 5vw;border-radius: 2.5vw;background-color: white;
                        display: flex;justify-content: center;align-items: center;">
                            <el-image src="/src//image//icon/enroll.svg" style="height: 3.5vw;">
                            </el-image>
                        </div>
                        <p style="margin-left: 10px;color: white;font-weight: 600;">作品评审</p>
                    </div>
                    <el-image src="/src/image/icon/right1.svg" style="height: 2.5vw;margin-left: 2px">

                    </el-image>
                    <div style="width: 20vw;height: 10vw;border-radius: 10px;
                        background: linear-gradient(to right, #456dfe, #436eff,#446eff,#446eff);
                        max-width: 240px;max-height: 120px;display: flex;
                        justify-content: center;align-items: center;">
                        <div style="width: 5vw;height: 5vw;border-radius: 2.5vw;background-color: white;
                        display: flex;justify-content: center;align-items: center;">
                            <el-image src="/src//image//icon/enroll.svg" style="height: 3.5vw;">
                            </el-image>
                        </div>
                        <p style="margin-left: 10px;color: white;font-weight: 600;">获奖公示</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full" style="min-height: 280px;height: auto;padding-top: 20px;padding-bottom: 20px;">
            <div style="width: 100%;height: 8vw;display: flex;
            align-items: center;justify-content: center;font-weight: 800;font-size: 3.5vw;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);margin-top: 2vw;">
                比赛指南
            </div>
            <div style="width: 100%;height: auto;padding-top: 20px;padding-bottom: 20px;display: flex;
            align-items: center;justify-content: center;margin-top: 20px;">
                <div style="height: 100%; width: 90%; display: flex; flex-direction: column; padding: 60px 40px 40px 40px; max-width: 1200px; 
                    background-color: #fefdff; box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
                    text-align: left;">
                    <h3 style="font-weight: 700;font-size: 1.4vw;">2023年青岛市中等职业技术学校教学能力比赛规程</h3>
                    <p style="margin-top: 20px;margin-bottom: 4px;font-weight: 600;">一、指导思想</p>
                    <p style="text-indent: 2em;font-weight: 500;font-size: 0.95vw;line-height: 2vw;">
                        深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”，深入贯彻习近平总书记关于职业教育的重要只是，
                        落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”，深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”，深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”，深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”，深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”
                        深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”
                        深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”
                        深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”</p>
                    <p style="margin-top: 20px;margin-bottom: 4px;font-weight: 600;">二、比赛要求</p>
                    <p style="text-indent: 2em;font-weight: 500;font-size: 0.95vw;line-height: 2vw;">
                        深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”，深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”，深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”，深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”，深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”
                        深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”
                        深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”
                        深入贯彻习近平总书记关于职业教育的重要只是，落实全国职业教育大会精神，按照《国家职业教育改革实施方案》等部署，坚持“以赛促研，以赛促健”</p>

                    <el-button type="primary" style="background-color: #436dfd;width: 6vw;margin-top: 30px;"
                        @click="this.$router.push('/brochures'); changePageIndex('/brochures');">查看更多</el-button>
                </div>
            </div>

        </div>
        <div style="height: 20px;width: 100vw;">

        </div>
    </el-main>



</template>
 
<style>
.el-container{
    width: 100vw;
    height: auto;

}

.el-main {
    width: 100%;
    padding: 0%;
    min-width: 1000px;

}
.background-image {
    user-select: none;
    /* 禁止选择 */
    -webkit-user-drag: none;
    /* 禁止拖动 */
}

 
</style>