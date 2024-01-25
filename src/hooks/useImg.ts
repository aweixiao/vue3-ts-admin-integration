import {ref} from "vue";
import {getImg} from "@/api/modules/BlackHorseYougou.ts";

export default function () {
    const imgList = ref<any[]>([]);

    function GetImg() {
        getImg("").then((res: any) => {
            imgList.value = res.data.message
        })
    }

    return {imgList, GetImg}
}