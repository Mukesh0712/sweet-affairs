import swal from 'sweetalert'
export async function tableRequired() {
    const bookedBench = JSON.parse(localStorage.getItem("bookedTable"))
    if (!bookedBench) {
        await swal({
            title: 'Book Table First !',
            text: 'Please Book Table to Continue',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
        window.location.href = '/tables'
    }
}
