<template>
    <div class="about">
        <h1>Hi, I am ARS</h1>
        <br>
        <p>
            {{ about_context_writer }}<span class="blinking_cursor">|</span>
        </p>
        <br>
        <div class="btn-group">
            <button class="btn btn-primary" @click="$emit('move-camera')">Read More</button>
            &nbsp;
            <a href="https://dev-ars.vercel.app" style="text-decoration: none; font-size: 13px;color:#000;" class="btn btn-primary">Resume</a>
        </div>
    </div>
</template>


<style>
.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.about .btn-group {
    margin: 8px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.blinking_cursor {
    animation: blinking-cursor 0.5s infinite;
}

@keyframes blinking-cursor {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>


<script>

export default {

    data() {
        return {
            about_context: `I am a django developer with an expertise in Web Development.
            I also have an experiance in Flutter and VueJS to create Mobile and Web Applications with a little bit of
            knowledge with ElectronJS to create Desktop Applications.`,
            about_context_writer: ""
        }
    },

    methods: {

        write: function () {
            if (this.about_context_writer.length < this.about_context.length) {
                this.about_context_writer += this.about_context.charAt(this.about_context_writer.length);
                setTimeout(() => {
                    this.write();
                }, 100);
            }
        }

    },

    mounted() {
        this.write();
    }

}

</script>