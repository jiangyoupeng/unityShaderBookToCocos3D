import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('typescript')
export class typescript extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(cc.ModelComponent)
    model: cc.ModelComponent = null;

    @property(cc.CameraComponent)
    cameraComp: cc.CameraComponent = null;

    start () {
        // Your initialization goes here.
        const renderTex = new cc.RenderTexture();
        renderTex.reset({
            width: 256,
            height: 256,
            colorFormat: cc.RenderTexture.PixelFormat.RGBA8888,
            depthStencilFormat: cc.RenderTexture.DepthStencilFormat.DEPTH_24_STENCIL_8,
        });
        this.cameraComp.targetTexture = renderTex;
        const pass = this.model.material.passes[0];
        const binding = pass.getBinding('mainTexture');
        pass.bindTextureView(binding, renderTex.getGFXTextureView());
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
