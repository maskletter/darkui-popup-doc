import React, { useEffect, useState, useRef } from 'react'
import { CreateRootVue3, createShow, createQueue } from '@darkui/popup'
import { ShowControllerCore } from '@darkui/popup'
import { createApp, h } from 'vue'
import { Popup } from 'vant'
import 'vant/lib/index.css'

class VueShowController extends ShowControllerCore {
    unmount() {
        this.$other.$app.unmount();
    }
    createRoot() {
        document.body.appendChild(this.$el)
        this.$other.$app = createApp(
            h(this.Root, {
                controller: this,
            }),
        );
        this.$other.$app.mount(this.$el);
        return this;
    }
}

export default () => {

    const Root = useRef<any>();
    const Show = useRef<any>();
    const Queue = useRef<any>();
    useEffect(() => {
        Root.current = CreateRootVue3({
            visibilityName: 'show',
            cancelEventName: 'onClickOverlay',
            destoryEventName: 'onClosed',
            component: Popup as any,
        });
        Show.current = createShow<{
            round?: boolean;
            transition?: string;
            style?: any;
            content: any;
        }>(Root.current, VueShowController as any)
        Queue.current = createQueue<{
            round?: boolean;
            transition?: string;
            style?: any;
            content: any;
        }>(Root.current, VueShowController as any)
    }, [])

    const popup = () => {
        Show.current({
            content: () => h('h1', 'awdawd' + new Date())
        })
    }
    const popup2 = () => {
        const controller = new VueShowController(Root.current);
        controller.append({
            content: () => h('h1', [
                'awdawd' + new Date(),
                h('button', {
                    onClick() {
                        const controller = new VueShowController(Root.current);
                        controller.append({
                            content: () => h('h1', '新的弹窗')
                        })
                    }
                },"打开新的弹窗")
            ])
        })
    }
    const popup3 = () => {
        const { Queue: QueueMain, getQueueInfo } = Queue.current;
        QueueMain([
            () => h('h1', 'aaaaaaaaa'),
            {
                options: {
                    onCancel() {
                        const info = getQueueInfo();
                        info.$close('弹窗2 的消息')
                    }
                },
                render: () => h('h1', 'bbbbbbb')
            },
            {
                render: () => {
                    const info = getQueueInfo();
                    return h('h1', 'ccccc:'+info.message[0])
                }
            },
            () => h('h1', 'dddd')
        ])
    }

    return <div>
        <button onClick={popup}>打开vue3-vant弹窗</button>
        <button onClick={popup2}>通过Controller调用</button>
        <button onClick={popup3}>队列功能</button>
    </div>
}

