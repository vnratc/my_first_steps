// Edit Post
document.addEventListener('click', async (event) => {
    let element = event.target;
    if (element.className === 'btn-edit') {

        // Replace body with a textarea
        let body = document.querySelector(`#body-${element.id}`)
        body.innerHTML = ''
        let textarea = document.createElement('textarea')
        textarea.classList.add('form-control', 'mb-2')
        textarea.setAttribute('rows', '4')

        await fetch('/edit_post/' + element.id)
        .then(response => response.json())
        .then(post => textarea.value = post.body)
        body.append(textarea)

        // Hide "Edit" and ddd "Cancel" and "Save" buttons
        element.style.display = 'none'
        let cancel = document.createElement('button')
        cancel.innerHTML = "Cancel"
        let save = document.createElement('button')
        save
        save.innerHTML = "Save"
        let post_div = document.querySelector(`#post-${element.id}`)
        post_div.append(cancel, save)

        function reset() {textarea.remove(), cancel.remove(), save.remove(), element.style.display = 'inline-block'}
        // Cancel action
        cancel.onclick = async () => {
            await fetch('/edit_post/' + element.id)
            .then(response => response.json())
            .then(post => body.innerHTML = post.body)
            reset()
        }

        // Save
        save.onclick = async () => {
            await fetch('/save_edit/' + element.id, {
                method: 'POST',
                body: JSON.stringify(textarea.value)
            })
            .then(response => response.json())
            .then(post => body.innerHTML = post.body.replaceAll('\n', '<br>'))
            reset()  
        }
    }
})

// Fix new line for post body
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.body').forEach(body => {
        body.innerHTML = body.innerHTML.replaceAll('\n', '<br>')
    }) 
})