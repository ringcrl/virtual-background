import Paper from '@material-ui/core/Paper'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { BodyPix } from '@tensorflow-models/body-pix'
import { useEffect, useState } from 'react'
import { BackgroundConfig } from '../helpers/backgroundHelper'
import { PostProcessingConfig } from '../helpers/postProcessingHelper'
import { SegmentationConfig } from '../helpers/segmentationHelper'
import { SourceConfig, SourcePlayback } from '../helpers/sourceHelper'
import { TFLite } from '../hooks/useTFLite'
import OutputViewer from './OutputViewer'
import SourceViewer from './SourceViewer'

type FaceLandMarkProps = {
  sourceConfig: SourceConfig
  backgroundConfig: BackgroundConfig
  segmentationConfig: SegmentationConfig
  postProcessingConfig: PostProcessingConfig
  bodyPix?: BodyPix
  tflite?: TFLite
}

function FaceLandMark(props: FaceLandMarkProps) {
  const classes = useStyles()
  const [sourcePlayback, setSourcePlayback] = useState<SourcePlayback>()

  useEffect(() => {
    setSourcePlayback(undefined)
  }, [props.sourceConfig])

  return (
    <Paper className={classes.root}>
      <SourceViewer
        sourceConfig={props.sourceConfig}
        onLoad={setSourcePlayback}
      />
      {sourcePlayback && props.bodyPix && props.tflite && (
        <OutputViewer
          sourcePlayback={sourcePlayback}
          backgroundConfig={props.backgroundConfig}
          segmentationConfig={props.segmentationConfig}
          postProcessingConfig={props.postProcessingConfig}
          bodyPix={props.bodyPix}
          tflite={props.tflite}
        />
      )}
    </Paper>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  const minHeight = [`${theme.spacing(52)}px`, `100vh - ${theme.spacing(2)}px`]

  return createStyles({
    root: {
      minHeight: `calc(min(${minHeight.join(', ')}))`,
      display: 'flex',
      overflow: 'hidden',
    },
    noOutput: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  })
})

export default FaceLandMark
