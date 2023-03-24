//% weight=0 color=#3CB371 icon="\uf2db" block="sensors"
namespace sensors {
	//% blockId=DDMmotor block="Mcontrol pin %McontrolPin|direction of Mcontrol(0~1) %McontrolValue|MSpeed pin %MSpeedPin|speed of MSpeed(0~255) %MSpeedValue" blockExternalInputs=false
    //% McontrolValue.min=0 McontrolValue.max=1 
	//% MSpeedValue.min=0 MSpeedValue.max=255
    //% McontrolPin.fieldEditor="gridpicker" McontrolPin.fieldOptions.columns=4
    //% McontrolPin.fieldOptions.tooltips="false" McontrolPin.fieldOptions.width="300"
	//% MSpeedPin.fieldEditor="gridpicker" MSpeedPin.fieldOptions.columns=4
    //% MSpeedPin.fieldOptions.tooltips="false" MSpeedPin.fieldOptions.width="300"
    
    export function DDMmotor(McontrolPin: AnalogPin,McontrolValue: number,MSpeedPin: AnalogPin,MSpeedValue: number): void {
        pins.analogWritePin(McontrolPin, pins.map(McontrolValue, 0, 1, 0, 1023));
        pins.analogWritePin(MSpeedPin, pins.map(MSpeedValue, 0, 255, 0, 1023));	   
    }
}
