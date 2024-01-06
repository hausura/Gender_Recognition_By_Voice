import os
import pickle
from subprocess import run

import pandas as pd

import neural_net
import sound_recorder

import streamlit as st 


def show(duration):
                # sound_recorder.run(5)
                sound_recorder.run(5)

                print('\nExtracting data from recorded voice...\n')
                run(['Rscript', 'getAttributes.r',
                     os.getcwd()])  # running R script for extracting data from recorded voice

                print('\n\nPreprocessing extracted data...')
                data = pd.read_csv('output/voiceDetails.csv')
                del data['peakf'], data['sound.files'], data['selec'], data['duration']
                dataset = pd.read_csv('voice.csv')
                dataset = dataset.iloc[:, :-1]
                data = (data - dataset.mean()) / (dataset.max() - dataset.min())  # scale

                trained_neural_net = pickle.load(open('trained_neural_net', 'rb'))  # load trained neural net from file

                print('\nPrediction: \r')
                print('Female' if trained_neural_net.predict(data)[0] == 0 else 'Male')  # print prediction
                st.write('\nPrediction: \r')
                st.write('Female' if trained_neural_net.predict(data)[0] == 0 else 'Male')  # print prediction


if __name__ == '__main__':
    # run()
    button_clicked = st.button("Record")
    duration = st.slider('Thời lượng ghi âm (giây)', 1, 10, 3)
    # st.write(float(duration))

    if (button_clicked):
        st.write("Recording...!")
        show(duration)

        st.write("Done!")
        if st.button('Reset'):
            st.empty()






