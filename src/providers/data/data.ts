import { Injectable } from "@angular/core";


@Injectable()
export class DataProvider{
    public tabs=[
        {title: 'Home', icon: 'home'},
        {title: 'Help', icon: 'help'},
        {title: 'Account', icon: 'contact'}
    ]
    public menus=[
        {title: 'Map', icon: 'map', color: '#f3d470', page: 'MapPage'}, 
        {title: 'Barcode', icon: 'barcode', color: '#f3d470', page: 'BarcodePage'},
        {title: 'Camera', icon: 'camera', color: '#f3d470', page: 'CameraPage'},
        {title: 'Gallery', icon: 'images', color: '#f3d470', page: 'GalleryPage'},
        {title: 'Meja', icon: 'pricetag', color: '#f3d470', page: 'MejaPage'},
        {title: 'Kursi', icon: 'pricetag', color: '#f3d470', page: 'KursiPage'},
        {title: 'Lemari', icon: 'pricetag', color: '#f3d470', page: 'LemariPage'},
        {title: 'Bed', icon: 'pricetag', color: '#f3d470', page: 'BedPage'},
    ];

    public mejas=[
        {title: 'Classic', title2: 'Rp 1.000.000,-', title3: 'Rp 999.999,-', image: 'http://101.255.60.202/webapi/img/mejaclassic/200/200'},
        {title: 'Modern', title2: 'Rp 2.000.000,-', title3: 'Rp 1.999.999,-', image: 'http://101.255.60.202/webapi/img/mejamodern/200/200'},
        {title: 'Modern', title2: 'Rp 2.000.000,-', title3: 'Rp 1.999.999,-', image: 'http://101.255.60.202/webapi/img/mejamodern/200/200'},
        {title: 'Modern', title2: 'Rp 2.000.000,-', title3: 'Rp 1.999.999,-', image: 'http://101.255.60.202/webapi/img/mejamodern/200/200'},
        {title: 'Modern', title2: 'Rp 2.000.000,-', title3: 'Rp 1.999.999,-', image: 'http://101.255.60.202/webapi/img/mejamodern/200/200'},
        {title: 'Modern', title2: 'Rp 2.000.000,-', title3: 'Rp 1.999.999,-', image: 'http://101.255.60.202/webapi/img/mejamodern/200/200'},
        {title: 'Modern', title2: 'Rp 2.000.000,-', title3: 'Rp 1.999.999,-', image: 'http://101.255.60.202/webapi/img/mejamodern/200/200'},
        {title: 'Modern', title2: 'Rp 2.000.000,-', title3: 'Rp 1.999.999,-', image: 'http://101.255.60.202/webapi/img/mejamodern/200/200'},
        {title: 'Modern', title2: 'Rp 2.000.000,-', title3: 'Rp 1.999.999,-', image: 'http://101.255.60.202/webapi/img/mejamodern/200/200'}
    ];

    public kursis=[
        {title: 'Classic', title2: 'Rp 500.000,-', title3: 'Rp 499.999,-', image: 'http://101.255.60.202/webapi/img/kursi1/200/200'},
        {title: 'Modern', title2: 'Rp 800.000,-', title3: 'Rp 799.999,-', image: 'http://101.255.60.202/webapi/img/kursi2/200/200'},
        {title: 'New Arrival', title2: 'Rp 1.500.000,-', title3: 'Rp 1.499.999,-', image: 'http://101.255.60.202/webapi/img/24000002/200/200'},
        {title: 'New Arrival', title2: 'Rp 1.500.000,-', title3: 'Rp 1.499.999,-', image: 'http://101.255.60.202/webapi/img/24000003/200/200'},
        {title: 'New Arrival', title2: 'Rp 1.500.000,-', title3: 'Rp 1.499.999,-', image: 'http://101.255.60.202/webapi/img/24000004/200/200'},
        {title: 'New Arrival', title2: 'Rp 1.500.000,-', title3: 'Rp 1.499.999,-', image: 'http://101.255.60.202/webapi/img/24000005/200/200'},
        {title: 'New Arrival', title2: 'Rp 1.500.000,-', title3: 'Rp 1.499.999,-', image: 'http://101.255.60.202/webapi/img/24000006/200/200'},
        {title: 'New Arrival', title2: 'Rp 1.500.000,-', title3: 'Rp 1.499.999,-', image: 'http://101.255.60.202/webapi/img/24000007/200/200'},
        {title: 'New Arrival', title2: 'Rp 1.500.000,-', title3: 'Rp 1.499.999,-', image: 'http://101.255.60.202/webapi/img/24000008/200/200'},
        {title: 'New Arrival', title2: 'Rp 1.500.000,-', title3: 'Rp 1.499.999,-', image: 'http://101.255.60.202/webapi/img/24000009/200/200'},
    ];

    constructor() {
        console.log('Hello DataProvider Provider');
    }
}
