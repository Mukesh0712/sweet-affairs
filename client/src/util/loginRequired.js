import { currentUser } from './currentUser'
import swal from 'sweetalert'

export async function loginRequired() {
    if (!currentUser) {
        await swal({
            title: 'Login Required',
            text: 'Please Login to Continue',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
        window.location.href = '/login'
    }
}
