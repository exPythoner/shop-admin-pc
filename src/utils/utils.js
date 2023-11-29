import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const timer = ref(0);
let router = useRouter();

export const timeChange = (jumpTime = 5) => {
    let timer = null;
    timer = setInterval(() => {
        if (jumpTime > 0) {
            jumpTime--;
        } else {
            router.push("/");
            clearInterval(timer);
        }
    }, 1000);
    return timer
};
