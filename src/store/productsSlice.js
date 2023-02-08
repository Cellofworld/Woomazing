import { createSlice } from "@reduxjs/toolkit";
import glow from '../img/productPhoto/glow.png';
import shirt from '../img/productPhoto/shirt.png';
import sweetShot from '../img/productPhoto/sweetShot.png';

const productSlice = createSlice({
    name: 'product',
    initialState: [
            {
                pid: '101',
                title: 'Футболка',
                name: 'USA',
                oldCost: '199',
                newCost: '99',
                srcImg: shirt,
                category: 'tShort',
                size: ['S','M','L','XL','XXL'],
                color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                relatedProd: [
                    {
                        pid: '103',
                        title: 'Футболка',
                        name: 'USA',
                        oldCost: '199',
                        newCost: '99',
                        srcImg: shirt,
                        category: 'tShort',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['303','101'],
        
                    },
                    {
                        pid: '303',
                        title: 'Свитшот',
                        name: 'Sweet',
                        oldCost: '399',
                        newCost: '199',
                        srcImg: sweetShot,
                        category: 'sweetShot',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['203','101'],
        
                    }
                ],
            },
            {
                pid: '102',
                title: 'Футболка',
                name: 'USA',
                oldCost: '199',
                newCost: '99',
                srcImg: shirt,
                category: 'tShort',
                size: ['S','M','L','XL','XXL'],
                color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                relatedProd: [
                    {
                        pid: '103',
                        title: 'Футболка',
                        name: 'USA',
                        oldCost: '199',
                        newCost: '99',
                        srcImg: shirt,
                        category: 'tShort',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['303','101'],
        
                    },
                    {
                        pid: '303',
                        title: 'Свитшот',
                        name: 'Sweet',
                        oldCost: '399',
                        newCost: '199',
                        srcImg: sweetShot,
                        category: 'sweetShot',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['203','101'],
        
                    }
                ],

            },
            {
                pid: '103',
                title: 'Футболка',
                name: 'USA',
                oldCost: '199',
                newCost: '99',
                srcImg: shirt,
                category: 'tShort',
                size: ['S','M','L','XL','XXL'],
                color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                relatedProd: [
                    {
                        pid: '103',
                        title: 'Футболка',
                        name: 'USA',
                        oldCost: '199',
                        newCost: '99',
                        srcImg: shirt,
                        category: 'tShort',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['303','101'],
        
                    },
                    {
                        pid: '303',
                        title: 'Свитшот',
                        name: 'Sweet',
                        oldCost: '399',
                        newCost: '199',
                        srcImg: sweetShot,
                        category: 'sweetShot',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['203','101'],
        
                    }
                ],

            },
            {
                pid: '201',
                title: 'Купальник',
                name: 'Glow',
                oldCost: '199',
                newCost: '129',
                srcImg: glow,
                category: 'swimSuit',
                size: ['S','M','L','XL','XXL'],
                color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                relatedProd: [
                    {
                        pid: '103',
                        title: 'Футболка',
                        name: 'USA',
                        oldCost: '199',
                        newCost: '99',
                        srcImg: shirt,
                        category: 'tShort',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['303','101'],
        
                    },
                    {
                        pid: '303',
                        title: 'Свитшот',
                        name: 'Sweet',
                        oldCost: '399',
                        newCost: '199',
                        srcImg: sweetShot,
                        category: 'sweetShot',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['203','101'],
        
                    }
                ],

            },
            {
                pid: '202',
                title: 'Купальник',
                name: 'Glow',
                oldCost: '199',
                newCost: '129',
                srcImg: glow,
                category: 'swimSuit',
                size: ['S','M','L','XL','XXL'],
                color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                relatedProd: [
                    {
                        pid: '103',
                        title: 'Футболка',
                        name: 'USA',
                        oldCost: '199',
                        newCost: '99',
                        srcImg: shirt,
                        category: 'tShort',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['303','101'],
        
                    },
                    {
                        pid: '303',
                        title: 'Свитшот',
                        name: 'Sweet',
                        oldCost: '399',
                        newCost: '199',
                        srcImg: sweetShot,
                        category: 'sweetShot',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['203','101'],
        
                    }
                ],

            },
            {
                pid: '203',
                title: 'Купальник',
                name: 'Glow',
                oldCost: '199',
                newCost: '129',
                srcImg: glow,
                category: 'swimSuit',
                size: ['S','M','L','XL','XXL'],
                color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                relatedProd: [
                    {
                        pid: '103',
                        title: 'Футболка',
                        name: 'USA',
                        oldCost: '199',
                        newCost: '99',
                        srcImg: shirt,
                        category: 'tShort',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['303','101'],
        
                    },
                    {
                        pid: '303',
                        title: 'Свитшот',
                        name: 'Sweet',
                        oldCost: '399',
                        newCost: '199',
                        srcImg: sweetShot,
                        category: 'sweetShot',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['203','101'],
        
                    }
                ],

            },
            {
                pid: '301',
                title: 'Свитшот',
                name: 'Sweet',
                oldCost: '399',
                newCost: '199',
                srcImg: sweetShot,
                category: 'sweetShot',
                size: ['S','M','L','XL','XXL'],
                color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                relatedProd: [
                    {
                        pid: '103',
                        title: 'Футболка',
                        name: 'USA',
                        oldCost: '199',
                        newCost: '99',
                        srcImg: shirt,
                        category: 'tShort',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['303','101'],
        
                    },
                    {
                        pid: '303',
                        title: 'Свитшот',
                        name: 'Sweet',
                        oldCost: '399',
                        newCost: '199',
                        srcImg: sweetShot,
                        category: 'sweetShot',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['203','101'],
        
                    }
                ],

            },
            {
                pid: '302',
                title: 'Свитшот',
                name: 'Sweet',
                oldCost: '399',
                newCost: '199',
                srcImg: sweetShot,
                category: 'sweetShot',
                size: ['S','M','L','XL','XXL'],
                color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                relatedProd: [
                    {
                        pid: '103',
                        title: 'Футболка',
                        name: 'USA',
                        oldCost: '199',
                        newCost: '99',
                        srcImg: shirt,
                        category: 'tShort',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['303','101'],
        
                    },
                    {
                        pid: '303',
                        title: 'Свитшот',
                        name: 'Sweet',
                        oldCost: '399',
                        newCost: '199',
                        srcImg: sweetShot,
                        category: 'sweetShot',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['203','101'],
        
                    }
                ],

            },
            {
                pid: '303',
                title: 'Свитшот',
                name: 'Sweet',
                oldCost: '399',
                newCost: '199',
                srcImg: sweetShot,
                category: 'sweetShot',
                size: ['S','M','L','XL','XXL'],
                color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                relatedProd: [
                    {
                        pid: '103',
                        title: 'Футболка',
                        name: 'USA',
                        oldCost: '199',
                        newCost: '99',
                        srcImg: shirt,
                        category: 'tShort',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['303','101'],
        
                    },
                    {
                        pid: '303',
                        title: 'Свитшот',
                        name: 'Sweet',
                        oldCost: '399',
                        newCost: '199',
                        srcImg: sweetShot,
                        category: 'sweetShot',
                        size: ['S','M','L','XL','XXL'],
                        color: ['#927876','#D4D4D4','#FD9696','#FDC796'],
                        relatedProd: ['203','101'],
        
                    }
                ],

            },
            
    ]
        
    ,
    reducers: {

    }
})

export default productSlice.reducer;