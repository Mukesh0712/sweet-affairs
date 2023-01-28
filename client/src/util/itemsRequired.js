import { currentPlate } from "./currentPlate"
import swal from "sweetalert"

export async function itemsRequired() {
    if (!currentPlate) {
        await swal({
            title: 'Items Required',
            text: 'Please Add items to Continue',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
        window.location.href = '/menu'
    }
}
