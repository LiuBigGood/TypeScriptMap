export interface DotMarker {
    name: string
    Coordinates: {
        lat: number,
        lng: number
    },
    contentText(): string
}
export class Maps {
    private  BottomMap: any
    constructor(DIVID: string) {
        this.BottomMap = new BMapGL.Map(DIVID);
        var point = new BMapGL.Point(116.404, 39.915);  // 创建点坐标 
        this.BottomMap.centerAndZoom(point, 1);
    }
    addMarker(DotMarker:DotMarker) {
        console.log(DotMarker);
        var point = new BMapGL.Point(DotMarker.Coordinates.lat, DotMarker.Coordinates.lng);   
        var marker = new BMapGL.Marker(point);    
        this.BottomMap.addOverlay(marker);                     // 将标注添加到地图中
    //    单击事件监听
    this.BottomMap.addEventListener('click', (e)=>{
        var opts = {
            width: 250,     // 信息窗口宽度
            height: 100,    // 信息窗口高度
            title: "标题"  // 信息窗口标题
        }
        var infoWindow = new BMapGL.InfoWindow(DotMarker.contentText(), opts);  // 创建信息窗口对象
        this.BottomMap.openInfoWindow(infoWindow, point);        // 打开信息窗口
});
    }
}