<template>
    <div class="contact">

        <iframe width="602" height="315" src="https://www.youtube.com/embed/Cp_iAFXvzaw" title="ARS || ARS" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

        <div class="form">
            <h2>Contact Me</h2>
            <div class="input-group">
                <input type="text" placeholder="Name">
                <input type="text" placeholder="Email">
            </div>
            <div class="input-group">
                <textarea rows="10" placeholder="Message"></textarea>
            </div>
            <div class="input-group">
                <a class="btn btn-primary" href="https://dev-ars.vercel.app/" style="text-decoration: none;font-size:14px;color:#000;">Submit</a>
                <div class="links">
                    <a href="https://github.com/ars-4" class="icon icon-github"></a>
                    <a href="https://linkedin.com/in/ars-dev" class="icon icon-linkedin2"></a>
                    <a href="https://www.youtube.com/@ars-1" class="icon icon-youtube1"></a>
                    <a href="mailto:ars7.dev@gmail.com" class="icon icon-envelop"></a>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.contact {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow-x: hidden !important;
}

.contact .form {
    padding: 20px;
}
.contact .form h2 {
    color: #fff;
}
.contact .form .input-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact .form input,
.contact .form textarea {
    width: 42%;
    display: block;
    outline: none;
    padding: 8px 12px;
    border-radius: 4px;
    margin: 4px 0px;
    border: 1px solid #ccc;
}

.contact .form textarea {
    width: 93%;
    resize: none;
    height: 100px;
}

.contact .form .input-group .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact .form a.icon {
    font-size: 24px;
    transition: 0.5s;
    text-decoration: none;
    color: #fff;
    margin: 4px 12px;
}

.contact .form a.icon:hover {
    transition: 0.5s;
    color: #42b983;
}

@media screen and (max-width: 768px) {
    .contact {
        width: 100%;
        display: block;
        overflow-x: hidden;
    }

    .contact .form {
        padding: 20px 4px;
        width: 80%;
    }

    .contact .form .input-group {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        overflow-x: hidden;
    }

    .contact .form .input-group .btn-primary {
        width: 80%;
        margin: 4px 0px;
    }
    .contact .form .input-group .links {
        width: 80%;
        margin: 4px 0px;
    }

    .contact iframe {
        width: 80%;
        aspect-ratio: 16/9;
    }

    .contact .form input {
        width: 70%;
        margin: 4px 0px;
    }

    .contact .form textarea {
        width: 70%;
    }
    .contact .form h2 {
        text-align: center;
    }
}</style>