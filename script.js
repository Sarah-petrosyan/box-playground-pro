const $=el=>document.querySelector(el)
// const boxEl=$('#box')
// $('#textColor').oninput=function(){
//     boxEl.style.color=this.value
// }
// $('#fontSize').oninput=function(){
//     boxEl.style.fontSize=this.value + 'px'
// }
// $('#fontWeight').oninput =function(){
//     boxEl.style.fontWeight=this.value
// }
// $('#textTransform').oninput =function(){
//     boxEl.style.textTransform=this.value
// }
// $('#textDecoration').oninput =function(){
//     boxEl.style.textDecoration=this.value
// }
// $('#rotate').oninput =function(){
//     boxEl.style.transform=`rotate(${this.value}deg)`
// }
// $('#scale').oninput =function(){
//     boxEl.style.transform=`scale(${this.value})`
// }
// $('#transitionTime').oninput =function(){
//     boxEl.style.transition= this.value + 's'
// }

const styled={
    main:[
        {
            el:'#textColor',
            property:'color',
            unit:'',
            result:'#box',
        },
        {
            el:'#fontSize',
            property:'fontSize',
            unit:'px',
            result:'#box',
        },
        {
            el:'#fontWeight',
            property:'fontWeight',
            unit:'',
            result:'#box',
        },
        {
            el:'#textTransform',
            property:'textTransform',
            unit:'',
            result:'#box',
        },
        {
            el:'#textDecoration',
            property:'textDecoration',
            unit:'',
            result:'#box',
        },

        {
            el:'#transitionTime',
            property:'transition',
            unit:'s',
            result:'#box',
        },
    ],
    transform:[
        {
            el:'#rotate',
            property:'transform',
            unitStart:'rotate(',
            unitEnd:'deg)',
            result:'#box',
        },
        {
            el:'#scale',
            property:'transform',
            unitStart:'scale(',
            unitEnd:')',
            result:'#box',
        },
    ],
    shadow:{
        values:['#000000','1px','2px','3px','4px'],
        elements:[
            {
                el:'#shColor',
                index:0,
                unit:'',
                result:'#box',
            },
            {
                el:'#shX',
                index:1,
                unit:'px',
                result:'#box',
            }, {
                el:'#shY',
                index:2,
                unit:'px',
                result:'#box',
            }, {
                el:'#shBlur',
                index:3,
                unit:'px',
                result:'#box',
            }, {
                el:'#shSpread',
                index:4,
                unit:'px',
                result:'#box',
            },
        ]
    }
}





// const reviewBoxEl=$("#box")
styled.main.forEach(obj=>{
$(obj.el).oninput=function (){
    $(obj.result).style[obj.property]=this.value+obj.unit
}
})
styled.transform.forEach(obj=>{
    $(obj.el).oninput=function (){
        $(obj.result).style[obj.property]=obj.unitStart+this.value+obj.unitEnd
    }
})

styled.shadow.elements.forEach(obj=>{

    $(obj.el).oninput=function () {

        let data = styled.shadow
        data.values[obj.index] = this.value + obj.unit
        $(obj.result).style.boxShadow = data.values.join(' ')
    }

})