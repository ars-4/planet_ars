<template>
    <div class="projects" ref="projects_component">

        <h1 class="title">My Best Projects</h1>

        <div class="cards">
            <div class="project-card" v-for="project in projects" :key="project.id">
                <img :src="project.image" alt="project.title">
                <div class="body">
                    <span class="title">{{ project.title }}</span>
                    <span class="description">
                        {{ project.description }}
                    </span>
                    <a :href="project.url" class="btn btn-primary">Project URL</a>
                </div>
            </div>
        </div>

        <div class="footer">
            <button class="btn btn-primary" @click="$emit('move-camera')">Read More</button>
        </div>

    </div>
</template>

<style>
.projects {
    width: 100%;
    transition: 0.5s;
    transition-delay: 0.75s;
    opacity: 0;
}
.projects.visible {
    transition: 0.5s;
    transition-delay: 0.75s;
    opacity: 1;
}

.projects .title {
    text-align: center;
    margin: 20px 0px;
    font-size: 38px;
    color: #fff;
}
.projects .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 320px;
    overflow-y: scroll;
}
.projects .cards::-webkit-scrollbar {
    display: none;
}

.projects .project-card {
    width: 250px;
    min-width: 250px;
    height: 300px;
    border: 1px solid #c3c3c3;
    margin: 8px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    color: #fff;
}

.projects .project-card img {
    width: 100%;
    height: 150px;
}

.projects .project-card .body {
    padding: 8px;
    display: flex;
    flex-direction: column;
}

.projects .project-card .body .title {
    font-weight: bold;
    margin: 4px 0px;
    font-size: 18px;
    text-align: left;
    color: #fff;
}

.projects .project-card .body .description {
    margin: 4px 0px;
    font-size: 14px;
    height: 60px;
    overflow-y: scroll;
}
.projects .project-card .body .description::-webkit-scrollbar {
    display: none;
}

.projects .project-card .body .btn {
    text-decoration: none;
    color: #fff;
    font-weight: bolder;
    text-align: center;
}
.projects .footer {
    display: flex;
    justify-content: center;
    margin: 30px;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

@media screen and (max-width: 768px) {
    .projects .cards{
        flex-direction: row;
        overflow-x: scroll;
    }
}

</style>


<script>

import ims_image from '@/assets/projects/ims.png'
import redesign_estore from '@/assets/projects/redesign_estore.png'
import local_pos from '@/assets/projects/local_pos.png'
import modular from '@/assets/projects/modular.png'
import project_manager from '@/assets/projects/project_manager.png'
import send_bulk_sms from '@/assets/projects/send_bulk_sms.png'
import media from '@/assets/projects/media.png'
import webchat from '@/assets/projects/webchat.png'

export default {

    data() {
        return {
            projects: [
                { id: 0, title: 'Inventory Management', url: 'https://github.com/ars-4/inventory-frontend', image: ims_image, description: `It's an open-source, free to use system made for a warehouse to manage their inventory. It's made over DRF and Vue3.` },
                { id: 1, title: 'Redesign E-Store', url: 'https://redesign-estore.vercel.app/', image: redesign_estore, description: `An e-commerce website built for a client to sell their clothing products. It's made over DRF and Vue3.` },
                { id: 2, title: 'Point Of Sale', url: '#', image: local_pos, description: `A Point-Of-Sale system built over Django and Flutter. It's made for local shop keepers to manage their sales and products.` },
                { id: 3, title: 'Modular', url: 'https://github.com/ars-1/Modular', image: modular, description: `Billing management system integrated with Mikrotik's RouterOS to manage the network. Made for Internet Service Providers. Made over Django` },
                { id: 4, title: 'Project Manager', url: 'https://project-manager-orange.vercel.app', image: project_manager, description: `With real-time chat-support and daily project updates you can keep engaged with your customers real time. Made using DRF and Vue3` },
                { id: 5, title: 'Bulk SMS Sender', url: 'https://github.com/ars-4/send_bulk_message', image: send_bulk_sms, description: `Send bulk SMS to your customers. Integrated with Twilio and Whatsapp API provided by whatzapp.com. Can also send bulk emails via gmail. Made over ExpressJS.` },
                { id: 6, title: 'Django Media Server', url: 'https://github.com/ars-4/django_media_server', image: media, description: `A django based media server to watch your favourite movies on. Self hosted and open-source. Free to use. Made over Django Templating.` },
                { id: 7, title: 'Web Chat', url: '#', image: webchat, description: `A tawkto.io clone to talk to your clients via integration with your website. Self hosted, Made over DRF, Channels, PostgreSQLs and Vue3 along with pure JavaScript to embed it in your website.` }
            ]
        }
    },

    methods: {

       show_projects() {
            this.$refs.projects_component.classList.add('visible');
        }

    },

    mounted() {
        setTimeout(() => {
            this.show_projects();
        }, 100);
    }

}

</script>