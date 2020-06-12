import BaseModule from "./BaseModule";
import EventType from "../utils/EventType";
import Common from "../utils/Common";
import { ENGINE_TYPE } from "../enum/ENGINE_TYPE";


export default class AudioModule extends BaseModule {



    constructor() {
        super();

        moosnow.event.addListener(EventType.ON_PLATFORM_HIDE, this, (res) => {
            console.log('game state  ON_PLATFORM_HIDE ', res)
            this.stopMusic();

        })
        moosnow.event.addListener(EventType.ON_PLATFORM_SHOW, this, (res) => {
            console.log('game state  ON_PLATFORM_SHOW ', res)
            if (!moosnow.platform.videoPlaying)
                this._replayMusic();
        })
    }

    /**
      * 播放音效
      */
    public playSound(audioClip: cc.AudioClip, loops: boolean = false, complete = null, soundClass = null, startTime = 0) {
        if (this.isMute)
            return
        let soundId = cc.audioEngine.playEffect(audioClip, loops);
        cc.audioEngine.setFinishCallback(soundId, (res) => {
            if (complete) {
                complete(res);
            }
            if (!loops) {
                //cc.audioEngine.getState(soundId)==cc.audioEngine.AudioState.PLAYING
                cc.audioEngine.stop(soundId);
            }
        })

        return soundId
    }


    private _replayMusic() {
        this.playMusic(this._musicClip, this._musicLoops, this._musicComplete);
    }


    private _musicClip: cc.AudioClip | string
    private _musicLoops: boolean
    private _musicComplete: Function
    /**
     * 播放背景音乐 仅支持Laya cocos
     * @param audioClip cocos cc.AudioClip  laya 文件路径
     * @param loops 
     * @param complete 
     * @param startTime 
     */
    public playMusic(audioClip: cc.AudioClip | string, loops: boolean = true, complete = null) {
        if (this.isMute)
            return;

        this._musicClip = audioClip;
        this._musicLoops = loops;
        this._musicComplete = complete;

        if (Common.getEngine() == ENGINE_TYPE.COCOS) {
            let soundId = cc.audioEngine.playMusic(audioClip as cc.AudioClip, loops);
            cc.audioEngine.setFinishCallback(soundId, (res) => {
                if (complete) {
                    complete(res);
                }
            })
            return soundId
        }
        else if (Common.getEngine() == ENGINE_TYPE.LAYA) {
            Laya.SoundManager.playMusic("" + audioClip, 1, new Laya.Handler(this, (res) => {
                if (complete) {
                    complete(res);
                }
            }));
        }
    }
    /**
     * 关闭所有背景音效
     */
    public stopMusic() {
        // if (this.mMusicId)
        //     cc.audioEngine.stop(this.mMusicId)
        if (Common.getEngine() == ENGINE_TYPE.COCOS)
            cc.audioEngine.stopMusic()
        else if (Common.getEngine() == ENGINE_TYPE.LAYA)
            Laya.SoundManager.stopMusic();

    }

    /**
     * 存储在本地声音有关的设置key（字段字符串）
     * IS_MUTE 是否所有都静音{boolean}
     * IS_MUTE_MUSIC 是否背景音乐静音{boolean}
     * IS_MUTE_SOUND 是否音效静音{boolean}
     * VOLUME_MUSIC 背景音乐音量大小{number}
     * VOLUME_SOUND 音效音量大小{number}
    */
    private IS_MUTE: string = "isMute"
    private IS_MUTE_MUSIC: string = "isMuteMusic"
    private IS_MUTE_SOUND: string = "isMuteSound"
    private VOLUME_MUSIC: string = "volumeMusic"
    private VOLUME_SOUND: string = "volumeSound"
    private _volumeMusic: number = 1
    private _volumeSound: number = 1
    private _isMuteMusic: boolean = false
    private _isMuteSound: boolean = false
    private _isMute: boolean = false


    /**
        * 设置获取是否静音音效音乐
       */
    get isMuteSound() {
        return this._isMuteSound;
    }
    set isMuteSound(value) {
        this._isMuteSound = value;
        //Laya.SoundManager.soundMuted = value;
        this.save();
    }

    /**
     * 设置获取是否所有静音
    */
    get isMute() {
        return this._isMute;
    }
    set isMute(value) {
        this._isMute = value;
        this.save();
    }

    /**
      * 设置获取是否静音背景音乐
     */
    get isMuteMusic() {
        return this._isMuteMusic;
    }
    set isMuteMusic(value) {
        this._isMuteMusic = value;
        //Laya.SoundManager.musicMuted = value;
        this.save();
    }

    /**
     * 设置获取音效声音大小
     */

    get volumeSound() {
        return this._volumeSound;
    }
    set volumeSound(value) {
        this._volumeSound = value;
        //Laya.SoundManager.setSoundVolume(value);
        this.save();
    }

    /**
     * 保存数据到本地
    */
    save() {

        moosnow.setting.setValue(this.IS_MUTE, "" + this.isMute);
        moosnow.setting.setValue(this.IS_MUTE_MUSIC, "" + this.isMuteMusic);
        moosnow.setting.setValue(this.IS_MUTE_SOUND, "" + this.isMuteSound);
        // cc.sys.localStorage.setItem(this.VOLUME_MUSIC, "" + this.volumeMusic);
        // cc.sys.localStorage.setItem(this.VOLUME_SOUND, "" + this.volumeSound);
    }
    getSave() {
        this.isMute = moosnow.setting.getString(this.IS_MUTE, "false") == "true" ? true : false;
        this.isMuteMusic = moosnow.setting.getString(this.IS_MUTE_MUSIC, "false") == "true" ? true : false;
        this.isMuteSound = moosnow.setting.getString(this.IS_MUTE_SOUND, "false") == "true" ? true : false;
        // this.isMute = cc.sys.localStorage.getItem(this.IS_MUTE) == "true" ? true : false;
        // this.isMute = cc.sys.localStorage.getItem(this.IS_MUTE) == "true" ? true : false;
    }
}