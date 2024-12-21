type CiderAudioEvents = 'ready'
type CiderAudio = {
    store: AudioLabsStore;
    context: AudioContext | null;
    fetchBufferCache: { [key: string]: ArrayBuffer };
    source: MediaElementAudioSourceNode | null;
    audioNodes: {
        gainNode: GainNode | null;
        airplaygainNode: GainNode | null;
        spatialNode: ConvolverNode | null;
        airplayMuteAudioNode: GainNode | null;
        audioBands: BiquadFilterNode[] | null;
        vibrantbassNode: BiquadFilterNode | null;
        llpw: BiquadFilterNode | null;
        recorderNode: AudioWorkletNode | null;
        intelliGainComp: GainNode | null;
        atmosphereRealizer2: ConvolverNode | null;
        atmosphereRealizer1: ConvolverNode | null;
        opportunisticCorrection: ConvolverNode | null;
    };
    vibrantBass: {
        frequencies: number[];
        gain: number[];
        Q: number[];
    };
    ccON: boolean;
    mediaRecorder: any;
    init: (cb?: () => void) => void;
    _events: { [event: string]: Array<{ callback: (data: any) => void; opts: { once: boolean } }> };
    dispatchEvent: (event: CiderAudioEvents, data: any) => void;
    subscribe: (event: CiderAudioEvents, callback: (data: any) => void, opts?: { once: boolean }) => void;
}

export class SpatialPreset {
    id: string = "";
    file: string = "";
    name: string = "";
    description: string = "";
    gainComp: string = "";
    purchaseDocumentID: string = "";
}

export class CARPreset {
    id: string = "";
    file: string = "";
    name: string = "";
    description: string = "";
}

export class COCPreset {
    id: string = "";
    file: string = "";
    name: string = "";
    description: string = "";
    purchaseDocumentID: string = "";
}

type AudioLabsStore = {
    spatialPresets: SpatialPreset[];
    carPresets: CARPreset[];
    cocPresets: COCPreset[];
    user_ocprofiles: any[];
    user_spprofiles: any[];
};

export function useCiderAudio() {
    // @ts-ignore
    return window.CiderAudio as CiderAudio;
}
