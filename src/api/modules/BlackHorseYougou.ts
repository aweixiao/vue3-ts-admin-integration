//BlackHorseYougou.ts
import request from '@/utils/Axios.ts'

export function getImg(query: any) {
    return request({
        url: '/home/swiperdata',
        method: 'get',
        params: query,
    });
}