import BaseModule from "./BaseModule";
export default class AudioModule extends BaseModule {
    constructor();
    /**
      * 播放音效
      */
    playSound(audioClip: cc.AudioClip, loops?: boolean, complete?: any, soundClass?: any, startTime?: number): number;
    private _replayMusic;
    private _musicClip;
    private _musicLoops;
    private _musicComplete;
    /**
     * 播放背景音乐 仅支持Laya cocos
     * @param audioClip cocos cc.AudioClip  laya 文件路径
     * @param loops
     * @param complete
     * @param startTime
     */
    playMusic(audioClip: cc.AudioClip | string, loops?: boolean, complete?: any): number;
    /**
     * 关闭所有背景音效
     */
    stopMusic(): void;
    /**
     * 存储在本地声音有关的设置key（字段字符串）
     * IS_MUTE 是否所有都静音{boolean}
     * IS_MUTE_MUSIC 是否背景音乐静音{boolean}
     * IS_MUTE_SOUND 是否音效静音{boolean}
     * VOLUME_MUSIC 背景音乐音量大小{number}
     * VOLUME_SOUND 音效音量大小{number}
    */
    private IS_MUTE;
    private IS_MUTE_MUSIC;
    private IS_MUTE_SOUND;
    private VOLUME_MUSIC;
    private VOLUME_SOUND;
    private _volumeMusic;
    private _volumeSound;
    private _isMuteMusic;
    private _isMuteSound;
    private _isMute;
    /**
        * 设置获取是否静音音效音乐
       */
    get isMuteSound(): boolean;
    set isMuteSound(value: boolean);
    /**
     * 设置获取是否所有静音
    */
    get isMute(): boolean;
    set isMute(value: boolean);
    /**
      * 设置获取是否静音背景音乐
     */
    get isMuteMusic(): boolean;
    set isMuteMusic(value: boolean);
    /**
     * 设置获取音效声音大小
     */
    get volumeSound(): number;
    set volumeSound(value: number);
    /**
     * 保存数据到本地
    */
    save(): void;
    getSave(): void;
}
