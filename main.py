import os
import pickle
from subprocess import run

import pandas as pd

import neural_net
import sound_recorder

import streamlit as st 
import time


def show(duration):
                # sound_recorder.run(5)
                print('>>>check:',duration)
                if not isinstance(duration, int):
                    sound_recorder.run(duration[-1])
                else:
                    sound_recorder.run(duration)

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
                return('Female' if trained_neural_net.predict(data)[0] == 0 else 'Male')  # print prediction


if __name__ == '__main__':
    
    st.markdown(
    """
    <style>
    .title {
        color: blue;
        text-align: center;
    }
    button {
        background-color: green;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
    body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
    }
    h1 {
        color: #3366cc;
    }
    .custom-text {
        color: blue;
    }
    </style>
    """,
    unsafe_allow_html=True
    )
    
    # run()

    button_clicked = st.button("Record")
    duration = st.slider('Thời lượng ghi âm (giây)', 1, 10, 3, key='duration_key')
    # st.write(float(duration))


    if (button_clicked):
        st.write("Recording...!")
        st.write('\nPrediction: \r')

        output=show(duration)
        output_text = "Đây là một đoạn văn bản có màu xanh."
        
        # st.write('<p class="custom-text">{output}</p>', unsafe_allow_html=True)

        st.write(output)

        # st.write("Done!")
        print('done')
        if st.button('Reset'):
            st.empty()
    


    # st.title('Bộ đếm thời gian')

    # start_time = st.empty()
    # elapsed_time = st.empty()

    # start_button = st.button('Bắt đầu')
    # stop_button = st.button('Dừng')

    # start_flag = False
    # start = 0

    # if start_button:
    #     start_time.markdown("Thời gian bắt đầu: {}".format(time.ctime()))
    #     start = time.time()
    #     start_flag = True

    # while start_flag:
    #     current_time = time.time()
    #     elapsed = current_time - start
    #     elapsed_time.markdown("Thời gian đã trôi qua: {:.2f} giây".format(elapsed))
    #     time.sleep(0.1)
    #     if stop_button:
    #         start_flag = False

    







