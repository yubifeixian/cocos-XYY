var jsList=[
//测试模块
"src/test/TestScene.js",
// 通用模块
"src/common/ai/cardEffectAI.js",
"src/common/animation/FireParticleLayer.js",
"src/common/animation/addCardAnimation.js",
"src/common/animation/NormalSkillAnimationLayer.js",
"src/common/animation/attackTarget.js",
"src/common/animation/cardAnimation.js",
"src/common/animation/liaoyuTarget.js",
"src/common/animation/MagicLayer.js",
"src/common/animation/magicNodes.js",
"src/common/config/cardType.js",
"src/common/config/strings.js",
"src/common/config/version.js",
"src/common/config/text.js",
"src/common/config/mode.js",
"src/common/model/handCards.js",
"src/common/model/player.js",
"src/common/utils/arrayUtil.js",
"src/common/utils/baseEffect.js",
"src/common/utils/baseNpcEffect.js",
"src/common/utils/buttonManager.js",
"src/common/utils/dialogManager.js",
"src/common/utils/initImageView.js",
"src/common/utils/loadCharacterSkillAnimation.js",
"src/common/utils/rand.js",
"src/common/utils/skillXiejianxian.js",
"src/common/utils/stringUtil.js",
"src/common/utils/textArea.js",
"src/common/utils/tools.js",
"src/common/view/baseDialogLayer.js",
"src/common/view/detailLayer.js",
"src/common/view/duniangziEffectDialog.js",
"src/common/view/messageDialog.js",
"src/common/view/selectSkillDialog.js",
"src/common/view/selectCampDialog.js",
"src/common/view/selectCardDialog.js",
"src/common/view/selectCardTypeDialog.js",
"src/common/view/selectEqumentDialog.js",
"src/common/view/selectMonsterDialog.js",
"src/common/view/selectNpcEffectDialog.js",
"src/common/view/selectNumberDialog.js",
"src/common/view/selectPetsDialog.js",
"src/common/view/yesOrNoDialog.js",
"src/common/view/skillAnimationLayer.js",
"src/common/view/ChooseZoneLayer.js",
"src/common/view/ResultLayer.js",
"src/common/view/TouchLayer.js",
"src/scene/achivementScene.js",
"src/scene/chooseScene.js",
"src/scene/freeSelectScene.js",
"src/scene/gameScene.js",
"src/scene/indexScene.js",
"src/scene/advIndexScene.js",
"src/scene/loadScene.js",

// 挑战模式
"src/challengeMode/ai/baseAI.js",
"src/challengeMode/ai/SkillCharactersAI.js",
"src/challengeMode/animation/createSkillAnimation.js",
"src/challengeMode/animation/numberAnimation.js",
"src/challengeMode/config/achivemengtProgress.js",
"src/challengeMode/config/audioList.js",
"src/challengeMode/config/value.js",
"src/challengeMode/control/gameRound.js",
"src/challengeMode/model/achivement.js",
"src/challengeMode/model/armsModel.js",
"src/challengeMode/model/characterCards.js",
"src/challengeMode/model/monsterModel.js",
"src/challengeMode/monster/baseMonster.js",
"src/challengeMode/monster/yeling.js",
"src/challengeMode/monster/anxiang.js",
"src/challengeMode/monster/goumang.js",
"src/challengeMode/monster/diejing.js",
"src/challengeMode/monster/jiliangyinzhe.js",
"src/challengeMode/monster/chiguiwang.js",
"src/challengeMode/monster/duniangzi.js",
"src/challengeMode/monster/xiejianxian.js",
"src/challengeMode/monster/qianbeibuzui.js",
"src/challengeMode/monster/wudushou.js",
"src/challengeMode/monster/sheyaonan.js",
"src/challengeMode/monster/shuimoshou.js",
"src/challengeMode/monster/yanyue.js",
"src/challengeMode/monster/feifei.js",
"src/challengeMode/monster/huyaonv.js",
"src/challengeMode/monster/rongyanshouwang.js",
"src/challengeMode/monster/xuangui.js",
"src/challengeMode/monster/xingtian.js",
"src/challengeMode/monster/jinchanguimu.js",
"src/challengeMode/monster/tianguihuang.js",
"src/challengeMode/monster/npc.js",
"src/challengeMode/monster/huoqilin.js",
"src/challengeMode/util/baseEventEffect.js",
"src/challengeMode/util/calculate.js",
"src/challengeMode/util/cardEffect.js",
"src/challengeMode/util/challengeRand.js",
"src/challengeMode/util/randomCharacter.js",
"src/challengeMode/util/handCardImageViewCtor.js",
"src/challengeMode/util/initChallengeGameView.js",
"src/challengeMode/util/initGameValue.js",
"src/challengeMode/util/judge.js",
"src/challengeMode/util/skillCharacters.js",
"src/challengeMode/view/selectPlayerDialog.js",
"src/challengeMode/view/evnetLayer.js",
"src/challengeMode/view/turnMonsterCardLayer.js",
"src/challengeMode/view/hurtNumberLayer.js",

// 冒险模式
"src/adventureMode/advAi/advBaseAI.js",
"src/adventureMode/advAi/advSkillCharactersAI.js",
"src/adventureMode/advBoss/advBossHandCard.js",
"src/adventureMode/advBoss/advBossHandCardEffect.js",
"src/adventureMode/advConfig/advValue.js",
"src/adventureMode/advControl/advGameRound.js",
"src/adventureMode/advLayer/advGameSceneLayer.js",
"src/adventureMode/advModel/advBossCards.js",
"src/adventureMode/advModel/advCharacterCards.js",
"src/adventureMode/advModel/advMonsterModel.js",
"src/adventureMode/advModel/advStageModel.js",
"src/adventureMode/advMonster/advBaseMonster.js",
"src/adventureMode/advMonster/advAnxiang.js",
"src/adventureMode/advMonster/advChiguiwang.js",
"src/adventureMode/advMonster/advDiejing.js",
"src/adventureMode/advMonster/advDuniangzi.js",
"src/adventureMode/advMonster/advFeifei.js",
"src/adventureMode/advMonster/advGoumang.js",
"src/adventureMode/advMonster/advGuanyinmizhen.js",
"src/adventureMode/advMonster/advHuayaoshui.js",
"src/adventureMode/advMonster/advHuyaonv.js",
"src/adventureMode/advMonster/advJiliangyinzhe.js",
"src/adventureMode/advMonster/advJinchanguimu.js",
"src/adventureMode/advMonster/advJushentiantu.js",
"src/adventureMode/advMonster/advLingquan.js",
"src/adventureMode/advMonster/advMuhoudeyinmou.js",
"src/adventureMode/advMonster/advNpc.js",
"src/adventureMode/advMonster/advQianbeibuzui.js",
"src/adventureMode/advMonster/advRongyanshouwang.js",
"src/adventureMode/advMonster/advSheyaonan.js",
"src/adventureMode/advMonster/advShuimoshou.js",
"src/adventureMode/advMonster/advTantadeqiongding.js",
"src/adventureMode/advMonster/advTianguihuang.js",
"src/adventureMode/advMonster/advWudushou.js",
"src/adventureMode/advMonster/advXiejianxian.js",
"src/adventureMode/advMonster/advXingfengxueyu.js",
"src/adventureMode/advMonster/advXingtian.js",
"src/adventureMode/advMonster/advXuangui.js",
"src/adventureMode/advMonster/advYanyue.js",
"src/adventureMode/advMonster/advYeling.js",
"src/adventureMode/advMonster/advZhefu.js",
"src/adventureMode/advScene/advGameScene.js",
"src/adventureMode/advStage/Stage1_1.js",
"src/adventureMode/advStage/Stage1_2.js",
"src/adventureMode/advStage/Stage1_3.js",
"src/adventureMode/advStage/Stage1_4.js",
"src/adventureMode/advStage/Stage1_5.js",
"src/adventureMode/advStage/Stage2_1.js",
"src/adventureMode/advStage/Stage2_2.js",
"src/adventureMode/advStage/Stage2_3.js",
"src/adventureMode/advStage/Stage2_4.js",
"src/adventureMode/advStage/Stage2_5.js",
"src/adventureMode/advUtil/advCalculate.js",
"src/adventureMode/advUtil/advCardEffect.js",
"src/adventureMode/advUtil/advHandCardImageViewCtor.js",
"src/adventureMode/advUtil/advInitGameValue.js",
"src/adventureMode/advUtil/advJudge.js",
"src/adventureMode/advUtil/advRand.js",
"src/adventureMode/advUtil/advSkillBoss.js",
"src/adventureMode/advUtil/advSkillCharacters.js",
"src/adventureMode/advUtil/advSleeper.js",
"src/adventureMode/advUtil/advStageManager.js",
"src/adventureMode/advUtil/InitAdvGameView.js",
"src/adventureMode/advView/advChooseCharacterDialog.js",
"src/adventureMode/advView/advChooseOrDropMonsterDialog.js",
"src/adventureMode/advView/advSelectPlayerDialog.js",
"src/adventureMode/advView/advSelectNpcEffectDialog.js"
];