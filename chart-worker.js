self.onmessage = function(e) {
    if (e.data.type === 'update') {
        const currentFrame = e.data.frame;
        const totalFrames = e.data.totalFrames;
        
        // 计算图表需要的数据
        const centerPercent = (currentFrame / totalFrames) * 100;
        const halfRange = (30 / totalFrames) * 100;
        
        // 构建图表配置
        const option = {
            dataZoom: [{
                start: Math.max(0, centerPercent - halfRange),
                end: Math.min(100, centerPercent + halfRange)
            }],
            xAxis: Array(11).fill({}).map(() => ({
                axisPointer: {
                    value: currentFrame
                }
            }))
        };
        
        // 发送结果回主线程
        self.postMessage({
            type: 'chartUpdate',
            option: option
        });
    }
}; 